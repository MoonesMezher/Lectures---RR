(function () {
  'use strict';

  const BRAND = {
    name: 'Moones Mezher',
    portfolioUrl: 'https://www.moonesmezher.com',
    portfolioLabel: 'www.moonesmezher.com'
  };

  const app = document.getElementById('app');
  if (!app) return;

  function createElement(tag, attrs, children) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(function ([key, value]) {
        if (key === 'className') el.className = value;
        else if (key === 'href') el.setAttribute('href', value);
        else if (key === 'target') el.setAttribute('target', value);
        else if (key === 'rel') el.setAttribute('rel', value);
        else if (key === 'id') el.id = value;
        else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          Object.assign(el, value);
        }
      });
    }
    if (children != null) {
      const list = Array.isArray(children) ? children : [children];
      list.forEach(function (child) {
        if (child == null) return;
        if (typeof child === 'string' || typeof child === 'number') {
          el.appendChild(document.createTextNode(String(child)));
        } else if (child instanceof Node) {
          el.appendChild(child);
        }
      });
    }
    return el;
  }

  function renderHeader() {
    const header = createElement('header', { className: 'site-header' });
    const brand = createElement('div', { className: 'brand' });
    const nameLink = createElement('a', {
      className: 'brand-name',
      href: '#',
      id: 'brand-home-link'
    }, BRAND.name);
    nameLink.addEventListener('click', function (e) {
      e.preventDefault();
      navigate('');
    });
    const portfolio = createElement('p', { className: 'brand-portfolio' }, [
      createElement('a', { href: BRAND.portfolioUrl, target: '_blank', rel: 'noopener noreferrer' }, BRAND.portfolioLabel)
    ]);
    brand.appendChild(nameLink);
    brand.appendChild(portfolio);
    header.appendChild(brand);
    return header;
  }

  function getLectureId() {
    const hash = (window.location.hash || '').replace(/^#/, '');
    const params = new URLSearchParams(window.location.search);
    return params.get('lecture') || hash || '';
  }

  function navigate(lectureId) {
    if (lectureId) {
      window.location.hash = lectureId;
    } else {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    render();
  }

  function renderLectureList() {
    const main = createElement('main', { className: 'main' });
    const intro = createElement('div', { className: 'lectures-intro' });
    intro.appendChild(createElement('h1', {}, 'Lectures'));
    intro.appendChild(createElement('p', {}, 'Select a lecture to view description, content, and tasks.'));
    main.appendChild(intro);

    const grid = createElement('div', { className: 'lectures-grid' });
    (typeof LECTURES !== 'undefined' ? LECTURES : []).forEach(function (lecture) {
      const card = createElement('a', {
        className: 'lecture-card',
        href: '#' + lecture.id,
        id: 'lecture-' + lecture.id
      });
      card.addEventListener('click', function (e) {
        e.preventDefault();
        navigate(lecture.id);
      });
      card.appendChild(createElement('span', { className: 'lecture-card-id' }, lecture.id));
      card.appendChild(createElement('h2', {}, lecture.title));
      card.appendChild(createElement('p', {}, lecture.shortDescription || ''));
      const meta = createElement('div', { className: 'lecture-card-meta' });
      meta.appendChild(createElement('span', {}, (lecture.tasks && lecture.tasks.length) ? lecture.tasks.length + ' task(s)' : 'No tasks'));
      if (lecture.content && lecture.content.length) {
        meta.appendChild(createElement('span', {}, lecture.content.length + ' sections'));
      }
      card.appendChild(meta);
      grid.appendChild(card);
    });
    main.appendChild(grid);
    return main;
  }

  function renderContentBlock(block) {
    const wrap = createElement('div', { className: 'content-block ' + (block.type || '') });
    switch (block.type) {
      case 'heading':
        wrap.appendChild(createElement('h3', {}, block.text || ''));
        break;
      case 'paragraph':
        wrap.appendChild(createElement('p', {}, block.text || ''));
        break;
      case 'note':
        wrap.appendChild(createElement('div', { className: 'label' }, 'Note'));
        wrap.appendChild(createElement('p', {}, block.text || ''));
        break;
      case 'list':
        const ul = createElement('ul', {});
        (block.items || []).forEach(function (item) {
          ul.appendChild(createElement('li', {}, item));
        });
        wrap.appendChild(ul);
        break;
      case 'mapping':
        const table = createElement('table', {});
        const thead = createElement('thead', {});
        thead.appendChild(createElement('tr', {}, [
          createElement('th', {}, 'Class'),
          createElement('th', {}, 'CSS')
        ]));
        table.appendChild(thead);
        const tbody = createElement('tbody', {});
        (block.pairs || []).forEach(function (pair) {
          const tr = createElement('tr', {}, [
            createElement('td', {}, pair[0] || ''),
            createElement('td', {}, pair[1] || '')
          ]);
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        wrap.appendChild(table);
        break;
      case 'example':
        wrap.appendChild(createElement('div', { className: 'from' }, block.from || ''));
        wrap.appendChild(createElement('div', { className: 'arrow' }, '→'));
        wrap.appendChild(createElement('div', { className: 'to' }, block.to || ''));
        break;
      default:
        if (block.text) wrap.appendChild(createElement('p', {}, block.text));
    }
    return wrap;
  }

  function renderLectureDetail(lecture) {
    const main = createElement('main', { className: 'main' });
    const back = createElement('a', { className: 'lecture-back', href: '#', id: 'back-link' }, '← All lectures');
    back.addEventListener('click', function (e) {
      e.preventDefault();
      navigate('');
    });
    main.appendChild(back);

    const header = createElement('div', { className: 'lecture-detail-header' });
    header.appendChild(createElement('span', { className: 'badge' }, lecture.id));
    header.appendChild(createElement('h1', {}, lecture.title));
    if (lecture.repoUrl) {
      const repo = createElement('p', { className: 'repo-link' }, [
        'Repository: ',
        createElement('a', { href: lecture.repoUrl, target: '_blank', rel: 'noopener noreferrer' }, lecture.repoUrl)
      ]);
      header.appendChild(repo);
    }
    if (lecture.resourceUrl) {
      const res = createElement('p', { className: 'resource-link' }, [
        'Resource: ',
        createElement('a', { href: lecture.resourceUrl, target: '_blank', rel: 'noopener noreferrer' }, lecture.resourceUrl)
      ]);
      header.appendChild(res);
    }
    main.appendChild(header);

    if (lecture.shortDescription) {
      main.appendChild(createElement('p', { className: 'lecture-description' }, lecture.shortDescription));
    }

    const contentSection = createElement('section', { className: 'content-section' });
    contentSection.appendChild(createElement('h2', {}, 'Content'));
    (lecture.content || []).forEach(function (block) {
      contentSection.appendChild(renderContentBlock(block));
    });
    main.appendChild(contentSection);

    const tasksSection = createElement('section', { className: 'tasks-section' });
    tasksSection.appendChild(createElement('h2', {}, 'Tasks'));
    const tasksList = createElement('ul', { className: 'tasks-list' });
    (lecture.tasks || []).forEach(function (task, i) {
      const li = createElement('li', { className: 'task-item' });
      li.appendChild(createElement('span', { className: 'num' }, String(i + 1)));
      const textSpan = createElement('span', { className: 'text' });
      if (task && typeof task === 'object' && task.url) {
        textSpan.appendChild(createElement('a', { href: task.url, target: '_blank', rel: 'noopener noreferrer', className: 'task-link' }, task.text || task.url));
      } else {
        textSpan.appendChild(document.createTextNode(typeof task === 'string' ? task : (task && task.text) || ''));
      }
      li.appendChild(textSpan);
      tasksList.appendChild(li);
    });
    tasksSection.appendChild(tasksList);
    main.appendChild(tasksSection);

    return main;
  }

  function render() {
    const lectureId = getLectureId();
    const lecture = (typeof LECTURES !== 'undefined' ? LECTURES : []).find(function (l) { return l.id === lectureId; });

    app.innerHTML = '';
    app.appendChild(renderHeader());

    if (lecture) {
      document.title = lecture.title + ' — Lectures | ' + BRAND.name;
      app.appendChild(renderLectureDetail(lecture));
    } else {
      document.title = 'Lectures — ' + BRAND.name;
      app.appendChild(renderLectureList());
    }
  }

  window.addEventListener('hashchange', render);
  window.addEventListener('load', render);
})();
