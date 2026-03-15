/* app.js — Observer Framework Interactive Site */

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  // THEME TOGGLE
  // ═══════════════════════════════════════════
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let currentTheme = 'dark'; // default

  function setTheme(theme) {
    currentTheme = theme;
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      themeToggle.innerHTML = theme === 'dark'
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  setTheme('dark');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // ═══════════════════════════════════════════
  // MOBILE MENU
  // ═══════════════════════════════════════════
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => mobileNav.classList.add('open'));
    mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // ═══════════════════════════════════════════
  // SCROLL-AWARE NAV
  // ═══════════════════════════════════════════
  const nav = document.getElementById('nav');
  let lastScrollY = 0;
  let ticking = false;

  function updateNav() {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    if (scrollY > lastScrollY && scrollY > 300) {
      nav.classList.add('nav--hidden');
    } else {
      nav.classList.remove('nav--hidden');
    }
    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });

  // ═══════════════════════════════════════════
  // INTERSECTION OBSERVER — SCROLL REVEALS
  // ═══════════════════════════════════════════
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ═══════════════════════════════════════════
  // HERO PARTICLE NETWORK ANIMATION
  // ═══════════════════════════════════════════
  const heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    let particles = [];
    let animFrameId;
    const COLORS = ['#3b82f6', '#f59e0b', '#ef4444', '#10b981', '#8b5cf6'];

    function resizeCanvas() {
      const rect = heroCanvas.parentElement.getBoundingClientRect();
      heroCanvas.width = rect.width * window.devicePixelRatio;
      heroCanvas.height = rect.height * window.devicePixelRatio;
      heroCanvas.style.width = rect.width + 'px';
      heroCanvas.style.height = rect.height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function createParticles() {
      const rect = heroCanvas.parentElement.getBoundingClientRect();
      const count = Math.min(Math.floor(rect.width * rect.height / 12000), 80);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.5 + 0.2
        });
      }
    }

    function drawParticles() {
      const rect = heroCanvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      // Update positions
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      });

      // Draw connections
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animFrameId = requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      cancelAnimationFrame(animFrameId);
      resizeCanvas();
      createParticles();
      drawParticles();
    });
  }

  // ═══════════════════════════════════════════
  // D3.JS FORCE-DIRECTED MIND MAP
  // ═══════════════════════════════════════════
  const mindMapEl = document.getElementById('mind-map');
  if (mindMapEl && typeof d3 !== 'undefined') {
    buildMindMap();
  }

  function buildMindMap() {
    const container = document.getElementById('mind-map');
    const tooltip = document.getElementById('tooltip');
    const width = container.clientWidth;
    const height = container.clientHeight;

    const streamColors = {
      analytical: '#3b82f6',
      creative: '#f59e0b',
      critical: '#ef4444',
      systems: '#10b981',
      pragmatic: '#8b5cf6',
      hoo: '#e8c547'
    };

    const streamLabels = {
      analytical: 'Analytical Stream',
      creative: 'Creative Stream',
      critical: 'Critical Stream',
      systems: 'Systems Stream',
      pragmatic: 'Pragmatic Stream',
      hoo: 'Higher-Order Observer'
    };

    // Node data
    const nodes = [
      // HOO center
      { id: 'hoo', label: 'HOO Synthesis', stream: 'hoo', importance: 1.0, description: 'The Higher-Order Observer integrates insights from all five cognitive streams to produce a unified, optimized response.' },

      // Analytical
      { id: 'a1', label: 'Labor market data analysis', stream: 'analytical', importance: 0.8, description: 'Analyzing employment data across sectors to identify which skills will be most valued as AI adoption accelerates.' },
      { id: 'a2', label: 'Skills gap metrics', stream: 'analytical', importance: 0.7, description: 'Quantifying the gap between current graduate competencies and emerging AI-workforce requirements.' },
      { id: 'a3', label: 'Degree ROI statistics', stream: 'analytical', importance: 0.65, description: 'Evaluating return on investment for various degree paths in an AI-transformed job market.' },
      { id: 'a4', label: 'Automation risk assessment', stream: 'analytical', importance: 0.75, description: 'Mapping occupations by automation probability to guide curriculum prioritization.' },
      { id: 'a5', label: 'Employment trend projections', stream: 'analytical', importance: 0.7, description: 'Forecasting job market trajectories across industries using historical data and AI adoption curves.' },
      { id: 'a6', label: 'Credential value shifts', stream: 'analytical', importance: 0.6, description: 'Tracking how employer preferences are shifting from traditional credentials to demonstrated skills.' },

      // Creative
      { id: 'c1', label: 'AI-human collaboration studios', stream: 'creative', importance: 0.8, description: 'Creating hands-on studio spaces where students learn to co-create with AI tools across disciplines.' },
      { id: 'c2', label: 'Prompt engineering as core skill', stream: 'creative', importance: 0.75, description: 'Embedding AI interaction literacy — from prompting to evaluating outputs — as a foundational skill.' },
      { id: 'c3', label: 'Cross-disciplinary fusion degrees', stream: 'creative', importance: 0.7, description: 'Designing hybrid programs (e.g., AI + Ethics, Data Science + Art) that produce versatile graduates.' },
      { id: 'c4', label: 'Student-AI co-creation projects', stream: 'creative', importance: 0.65, description: 'Capstone projects where students partner with AI systems to solve real-world challenges.' },
      { id: 'c5', label: 'Gamified AI literacy', stream: 'creative', importance: 0.6, description: 'Using game-based learning to make AI concepts accessible and engaging for non-technical students.' },
      { id: 'c6', label: 'Reverse mentoring programs', stream: 'creative', importance: 0.55, description: 'Students teach faculty cutting-edge AI tools while learning research methodology in return.' },

      // Critical
      { id: 'r1', label: 'Over-reliance on AI risk', stream: 'critical', importance: 0.8, description: 'Warning against producing graduates who can use AI but cannot think independently when systems fail.' },
      { id: 'r2', label: 'Digital divide deepening', stream: 'critical', importance: 0.75, description: 'AI-driven education may widen inequality between well-resourced and under-resourced institutions.' },
      { id: 'r3', label: 'Critical thinking erosion', stream: 'critical', importance: 0.8, description: 'Risk that outsourcing cognitive tasks to AI weakens students\u2019 reasoning and judgment faculties.' },
      { id: 'r4', label: 'Ethical AI blind spots', stream: 'critical', importance: 0.7, description: 'Curricula may teach AI capability without adequately addressing bias, privacy, and social impact.' },
      { id: 'r5', label: 'Job displacement anxiety', stream: 'critical', importance: 0.65, description: 'Student and faculty fear of obsolescence may create resistance to necessary transformation.' },
      { id: 'r6', label: 'Credential inflation', stream: 'critical', importance: 0.6, description: 'As AI lowers barriers to skill acquisition, traditional credentials may lose signaling value.' },

      // Systems
      { id: 's1', label: 'Industry-academia feedback loops', stream: 'systems', importance: 0.85, description: 'Creating continuous information exchange between employers and universities to keep curricula relevant.' },
      { id: 's2', label: 'Adaptive curriculum systems', stream: 'systems', importance: 0.8, description: 'Designing modular curricula that can rapidly incorporate new AI developments without full overhaul.' },
      { id: 's3', label: 'Lifelong learning ecosystems', stream: 'systems', importance: 0.75, description: 'Building university infrastructure that supports continuous education beyond the initial degree.' },
      { id: 's4', label: 'AI governance frameworks', stream: 'systems', importance: 0.7, description: 'Developing institutional policies for responsible AI use in teaching, research, and assessment.' },
      { id: 's5', label: 'Global competitiveness dynamics', stream: 'systems', importance: 0.65, description: 'Understanding how national AI education strategies create competitive advantages in the global economy.' },
      { id: 's6', label: 'Technology adoption cycles', stream: 'systems', importance: 0.6, description: 'Mapping the diffusion of AI tools across higher education to time institutional investments.' },

      // Pragmatic
      { id: 'p1', label: 'Curriculum revision timeline', stream: 'pragmatic', importance: 0.8, description: 'Realistic phased plan: quick wins in 6 months, structural changes in 2 years, transformation in 5.' },
      { id: 'p2', label: 'Faculty AI training needs', stream: 'pragmatic', importance: 0.85, description: 'Most faculty lack AI proficiency — training programs must precede student-facing changes.' },
      { id: 'p3', label: 'Budget and resource allocation', stream: 'pragmatic', importance: 0.75, description: 'Identifying funding sources and cost trade-offs for AI infrastructure, tools, and faculty development.' },
      { id: 'p4', label: 'Industry partnership models', stream: 'pragmatic', importance: 0.8, description: 'Concrete partnership structures: adjunct industry lecturers, sponsored labs, internship pipelines.' },
      { id: 'p5', label: 'Assessment redesign', stream: 'pragmatic', importance: 0.7, description: 'Moving beyond traditional exams to evaluate AI-augmented problem-solving and human judgment.' },
      { id: 'p6', label: 'Infrastructure requirements', stream: 'pragmatic', importance: 0.65, description: 'Hardware, software, and networking needs: GPU clusters, API budgets, collaboration platforms.' }
    ];

    // Edges — within-stream and cross-stream connections
    const links = [
      // HOO connections to key nodes in each stream
      { source: 'hoo', target: 'a1', type: 'hoo' },
      { source: 'hoo', target: 'c1', type: 'hoo' },
      { source: 'hoo', target: 'r3', type: 'hoo' },
      { source: 'hoo', target: 's1', type: 'hoo' },
      { source: 'hoo', target: 'p2', type: 'hoo' },

      // Analytical intra-stream
      { source: 'a1', target: 'a2', type: 'intra' },
      { source: 'a1', target: 'a5', type: 'intra' },
      { source: 'a2', target: 'a3', type: 'intra' },
      { source: 'a4', target: 'a5', type: 'intra' },
      { source: 'a3', target: 'a6', type: 'intra' },
      { source: 'a4', target: 'a1', type: 'intra' },

      // Creative intra-stream
      { source: 'c1', target: 'c2', type: 'intra' },
      { source: 'c1', target: 'c4', type: 'intra' },
      { source: 'c2', target: 'c5', type: 'intra' },
      { source: 'c3', target: 'c4', type: 'intra' },
      { source: 'c5', target: 'c6', type: 'intra' },
      { source: 'c3', target: 'c1', type: 'intra' },

      // Critical intra-stream
      { source: 'r1', target: 'r3', type: 'intra' },
      { source: 'r2', target: 'r4', type: 'intra' },
      { source: 'r3', target: 'r5', type: 'intra' },
      { source: 'r4', target: 'r6', type: 'intra' },
      { source: 'r1', target: 'r5', type: 'intra' },
      { source: 'r2', target: 'r6', type: 'intra' },

      // Systems intra-stream
      { source: 's1', target: 's2', type: 'intra' },
      { source: 's2', target: 's3', type: 'intra' },
      { source: 's3', target: 's4', type: 'intra' },
      { source: 's4', target: 's5', type: 'intra' },
      { source: 's5', target: 's6', type: 'intra' },
      { source: 's1', target: 's4', type: 'intra' },

      // Pragmatic intra-stream
      { source: 'p1', target: 'p2', type: 'intra' },
      { source: 'p2', target: 'p3', type: 'intra' },
      { source: 'p3', target: 'p6', type: 'intra' },
      { source: 'p4', target: 'p5', type: 'intra' },
      { source: 'p1', target: 'p5', type: 'intra' },
      { source: 'p4', target: 'p1', type: 'intra' },

      // Cross-stream connections
      { source: 'a2', target: 'c2', type: 'cross' },
      { source: 'a4', target: 'r5', type: 'cross' },
      { source: 'c1', target: 'p4', type: 'cross' },
      { source: 'c3', target: 's2', type: 'cross' },
      { source: 'r1', target: 'p5', type: 'cross' },
      { source: 'r2', target: 'p3', type: 'cross' },
      { source: 's1', target: 'p4', type: 'cross' },
      { source: 's3', target: 'c6', type: 'cross' },
      { source: 'a6', target: 'r6', type: 'cross' },
      { source: 's4', target: 'r4', type: 'cross' },
      { source: 'p2', target: 'c6', type: 'cross' },
      { source: 'a5', target: 's5', type: 'cross' }
    ];

    // Cluster positions (angle-based)
    const cx = width / 2;
    const cy = height / 2;
    const clusterRadius = Math.min(width, height) * 0.3;
    const streamAngles = {
      analytical: -Math.PI / 2,         // top
      creative: -Math.PI / 2 + 2 * Math.PI / 5,
      critical: -Math.PI / 2 + 4 * Math.PI / 5,
      systems: -Math.PI / 2 + 6 * Math.PI / 5,
      pragmatic: -Math.PI / 2 + 8 * Math.PI / 5
    };

    // Initialize node positions near their cluster center
    nodes.forEach(n => {
      if (n.stream === 'hoo') {
        n.x = cx;
        n.y = cy;
        n.fx = null;
        n.fy = null;
      } else {
        const angle = streamAngles[n.stream];
        const jitter = 40;
        n.x = cx + Math.cos(angle) * clusterRadius + (Math.random() - 0.5) * jitter;
        n.y = cy + Math.sin(angle) * clusterRadius + (Math.random() - 0.5) * jitter;
      }
    });

    // Create SVG
    const svg = d3.select('#mind-map')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`);

    // Defs for glow filter
    const defs = svg.append('defs');
    const filter = defs.append('filter').attr('id', 'glow');
    filter.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // HOO gradient
    const hooGrad = defs.append('radialGradient').attr('id', 'hoo-gradient');
    hooGrad.append('stop').attr('offset', '0%').attr('stop-color', '#ffd700');
    hooGrad.append('stop').attr('offset', '100%').attr('stop-color', '#e8c547');

    // Links group
    const linkGroup = svg.append('g').attr('class', 'links');
    const nodeGroup = svg.append('g').attr('class', 'nodes');
    const labelGroup = svg.append('g').attr('class', 'labels');

    // Draw links
    const linkElements = linkGroup.selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', d => {
        if (d.type === 'hoo') return 'url(#hoo-line-grad-' + d.target + ')';
        if (d.type === 'cross') return 'rgba(255,255,255,0.08)';
        const sourceNode = nodes.find(n => n.id === (typeof d.source === 'string' ? d.source : d.source.id));
        return sourceNode ? streamColors[sourceNode.stream] : '#333';
      })
      .attr('stroke-width', d => d.type === 'hoo' ? 1.5 : d.type === 'cross' ? 0.6 : 1)
      .attr('stroke-opacity', d => d.type === 'hoo' ? 0.6 : d.type === 'cross' ? 0.3 : 0.35);

    // HOO line gradients
    links.filter(l => l.type === 'hoo').forEach(l => {
      const grad = defs.append('linearGradient')
        .attr('id', 'hoo-line-grad-' + l.target)
        .attr('gradientUnits', 'userSpaceOnUse');
      grad.append('stop').attr('offset', '0%').attr('stop-color', '#ffd700');
      const targetNode = nodes.find(n => n.id === l.target);
      grad.append('stop').attr('offset', '100%').attr('stop-color', targetNode ? streamColors[targetNode.stream] : '#fff');
    });

    // Draw nodes
    const nodeElements = nodeGroup.selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', d => {
        if (d.stream === 'hoo') return 18;
        return 6 + d.importance * 10;
      })
      .attr('fill', d => {
        if (d.stream === 'hoo') return 'url(#hoo-gradient)';
        return streamColors[d.stream];
      })
      .attr('stroke', d => d.stream === 'hoo' ? '#ffd700' : 'none')
      .attr('stroke-width', d => d.stream === 'hoo' ? 2 : 0)
      .attr('opacity', d => d.stream === 'hoo' ? 1 : 0.85)
      .attr('filter', d => d.stream === 'hoo' ? 'url(#glow)' : 'none')
      .style('cursor', 'grab');

    // Draw labels (only for larger nodes and HOO)
    const labelElements = labelGroup.selectAll('text')
      .data(nodes.filter(n => n.importance >= 0.75 || n.stream === 'hoo'))
      .enter()
      .append('text')
      .text(d => d.label)
      .attr('text-anchor', 'middle')
      .attr('dy', d => {
        const r = d.stream === 'hoo' ? 18 : 6 + d.importance * 10;
        return r + 14;
      })
      .attr('fill', d => d.stream === 'hoo' ? '#ffd700' : streamColors[d.stream])
      .attr('font-size', d => d.stream === 'hoo' ? '12px' : '10px')
      .attr('font-family', 'Inter, sans-serif')
      .attr('font-weight', d => d.stream === 'hoo' ? '600' : '500')
      .attr('opacity', 0.8)
      .attr('pointer-events', 'none');

    // Force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(d => {
        if (d.type === 'hoo') return clusterRadius * 0.7;
        if (d.type === 'cross') return clusterRadius * 1.2;
        return 50;
      }).strength(d => {
        if (d.type === 'hoo') return 0.15;
        if (d.type === 'cross') return 0.02;
        return 0.3;
      }))
      .force('charge', d3.forceManyBody().strength(d => d.stream === 'hoo' ? -200 : -80))
      .force('center', d3.forceCenter(cx, cy).strength(0.05))
      .force('cluster', forceCluster(0.15))
      .force('collide', d3.forceCollide().radius(d => (d.stream === 'hoo' ? 30 : 6 + d.importance * 10 + 5)).strength(0.7))
      .alpha(0.8)
      .alphaDecay(0.02)
      .on('tick', ticked);

    function forceCluster(strength) {
      let nodesCopy;
      function force(alpha) {
        nodesCopy.forEach(d => {
          if (d.stream === 'hoo') return;
          const angle = streamAngles[d.stream];
          const targetX = cx + Math.cos(angle) * clusterRadius;
          const targetY = cy + Math.sin(angle) * clusterRadius;
          d.vx += (targetX - d.x) * strength * alpha;
          d.vy += (targetY - d.y) * strength * alpha;
        });
      }
      force.initialize = function(n) { nodesCopy = n; };
      return force;
    }

    function ticked() {
      linkElements
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      nodeElements
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      labelElements
        .attr('x', d => d.x)
        .attr('y', d => d.y);

      // Update HOO line gradients
      links.filter(l => l.type === 'hoo').forEach(l => {
        const grad = d3.select('#hoo-line-grad-' + (typeof l.target === 'string' ? l.target : l.target.id));
        const src = typeof l.source === 'object' ? l.source : nodes.find(n => n.id === l.source);
        const tgt = typeof l.target === 'object' ? l.target : nodes.find(n => n.id === l.target);
        if (src && tgt) {
          grad.attr('x1', src.x).attr('y1', src.y).attr('x2', tgt.x).attr('y2', tgt.y);
        }
      });
    }

    // Drag behavior
    const drag = d3.drag()
      .on('start', function (event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
        d3.select(this).style('cursor', 'grabbing');
      })
      .on('drag', function (event, d) {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', function (event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
        d3.select(this).style('cursor', 'grab');
      });

    nodeElements.call(drag);

    // Tooltip
    nodeElements
      .on('mouseenter', function (event, d) {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        tooltip.querySelector('.tooltip-stream').textContent = streamLabels[d.stream];
        tooltip.querySelector('.tooltip-stream').style.color = streamColors[d.stream];
        tooltip.querySelector('.tooltip-text').textContent = d.description;

        let left = x + 16;
        let top = y - 10;
        if (left + 280 > rect.width) left = x - 296;
        if (top + 100 > rect.height) top = y - 80;
        if (top < 0) top = 10;

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        tooltip.classList.add('visible');

        // Highlight node
        d3.select(this).attr('opacity', 1).attr('filter', 'url(#glow)');
      })
      .on('mousemove', function (event) {
        const rect = container.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        let left = x + 16;
        let top = y - 10;
        if (left + 280 > rect.width) left = x - 296;
        if (top + 100 > rect.height) top = y - 80;
        if (top < 0) top = 10;
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
      })
      .on('mouseleave', function (event, d) {
        tooltip.classList.remove('visible');
        d3.select(this)
          .attr('opacity', d.stream === 'hoo' ? 1 : 0.85)
          .attr('filter', d.stream === 'hoo' ? 'url(#glow)' : 'none');
      });

    // Responsive resize
    function resizeMindMap() {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      svg.attr('width', newWidth).attr('height', newHeight).attr('viewBox', `0 0 ${newWidth} ${newHeight}`);
      simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2).strength(0.05));
      simulation.alpha(0.3).restart();
    }

    window.addEventListener('resize', resizeMindMap);
  }

  // ═══════════════════════════════════════════
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ═══════════════════════════════════════════
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  // ========== GEMINI OBSERVER DEMO ==========
async function callObserverAI(prompt) {
  try {
    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: `Observer multi-stream reasoning mode. User prompt: "${prompt}". 
Provide structured response with Analytical, Creative, Critical, Systems, Pragmatic streams.`
      })
    });
    const data = await response.json();
    return data.text;
  } catch (error) {
    return 'Demo temporarily unavailable (check console).';
  }
}

// Connect to demo UI - adjust IDs if needed
document.addEventListener('DOMContentLoaded', () => {
  // Find demo elements (update selectors to match your HTML)
  const demoInput = document.querySelector('.demo-prompt-input, #demo-input, input[placeholder*="prompt"]');
  const demoButton = document.querySelector('.demo-button, #demo-submit, button:has-text("Run")');
  const demoOutput = document.querySelector('.demo-output, #demo-result, .synthesis-text');
  
  if (demoButton && demoInput) {
    demoButton.onclick = async () => {
      const prompt = demoInput.value.trim();
      if (prompt && demoOutput) {
        demoOutput.textContent = '🧠 Observer thinking...';
        const result = await callObserverAI(prompt);
        demoOutput.textContent = result;
      }
    };
  }
  
  // Console test
  console.log('Observer Gemini ready. Test: callObserverAI("hello")');
});


})();
