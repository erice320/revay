'use strict';

(function(){
  const CONFIG = {
  "workerUrl": "https://onboarding-briefs-api.evanr.workers.dev",
  "fieldTypes": {
    "Contract Term": "rich_text",
    "Contract End Date": "date",
    "Setup / One-time Fees": "rich_text",
    "Billing Start / Deferral Terms": "rich_text",
    "Specific Commitments": "rich_text",
    "SF Business Issue": "rich_text",
    "SF Business Issue Details": "rich_text",
    "SF Business Issue Picklist": "rich_text",
    "SF Problems": "rich_text",
    "SF Solutions": "rich_text",
    "SF Value": "rich_text",
    "Kickoff Target Date": "date",
    "Kickoff Target Time": "rich_text",
    "Go-Live Target Date": "date",
    "Open Items Before Kickoff": "rich_text",
    "Project Flags / Risks": "rich_text",
    "Current Payment Processor": "rich_text",
    "Rev.io Payments": "select",
    "Merchant Statements Available": "select",
    "Payment Methods": "multi_select",
    "B: Current Billing Platform": "rich_text",
    "B: Other Systems Replaced": "rich_text",
    "B: Customer / Account Count": "number",
    "B: Data Export Available": "select",
    "B: API Credentials Status": "select",
    "B: Migration Notes": "rich_text",
    "B: Importer Count": "number",
    "B: Importer Details": "rich_text",
    "B: Monthly CDR Volume": "number",
    "B: International Rating Required": "checkbox",
    "B: Tax Provider": "rich_text",
    "B: Existing Tax Account / Client ID": "rich_text",
    "B: Tax-Exempt Clients": "checkbox",
    "B: Traffic Study Completed": "select",
    "B: Compliance Partner Name": "rich_text",
    "B: Compliance Partner Contact Email": "email",
    "B: Tax Notes": "rich_text",
    "B: Catalog Size": "number",
    "B: Catalog Export Available": "select",
    "B: Rate Decks Available": "select",
    "B: Go-Live Hard Deadline": "date",
    "B: Hard Deadline Reason": "rich_text",
    "B: Contract Segment": "rich_text",
    "B: CSA Rep": "rich_text",
    "P: Current / Prior PSA": "rich_text",
    "P: Migration Complexity": "select",
    "P: Customer / Record Count": "number",
    "P: Migration Notes": "rich_text",
    "P: Accounting Software": "rich_text",
    "P: Two-Way Sync Required": "checkbox",
    "P: GL Codes Ready": "select",
    "P: RMM Tool": "rich_text",
    "P: Integration Priority": "rich_text",
    "P: Other Integrations Needed": "rich_text",
    "P: Dispatch Method": "rich_text",
    "P: Service Type": "rich_text",
    "P: Business Vertical": "rich_text",
    "P: Existing Rev.io Billing Client": "checkbox",
    "P: Go-Live Complexity Tier": "select",
    "P: OC Assigned": "select",
    "P: Additional Integrations": "multi_select",
    "P: Integration Notes": "rich_text",
    "P: Billing / Finance Contact": "rich_text",
    "P: Current Billing System": "rich_text",
    "P: Payment / Merchant Contact": "rich_text",
    "P: Accounting Contact": "rich_text",
    "P: New Billing Client Notes": "rich_text",
    "z_Open Gaps": "rich_text"
  },
  "selectOptions": {
    "Rev.io Payments": [
      "Yes",
      "No",
      "TBD"
    ],
    "Merchant Statements Available": [
      "Yes",
      "No",
      "TBD"
    ],
    "Payment Methods": [
      "ACH",
      "Credit Card",
      "Check",
      "Wire",
      "Other",
      "TBD"
    ],
    "B: Data Export Available": [
      "Yes",
      "No",
      "Unknown"
    ],
    "B: API Credentials Status": [
      "Have",
      "Requested",
      "Missing"
    ],
    "B: Traffic Study Completed": [
      "Yes",
      "No",
      "TBD"
    ],
    "B: Catalog Export Available": [
      "Yes",
      "No",
      "TBD"
    ],
    "B: Rate Decks Available": [
      "Yes",
      "No",
      "TBD"
    ],
    "P: Migration Complexity": [
      "Low",
      "Medium",
      "High",
      "TBD"
    ],
    "P: GL Codes Ready": [
      "Yes",
      "No",
      "Partial",
      "TBD"
    ],
    "P: Go-Live Complexity Tier": [
      "Low",
      "Medium",
      "High",
      "TBD"
    ],
    "P: OC Assigned": [
      "- Assign OC -",
      "Andrew Millington",
      "JD Caulkins",
      "Lex Ligon",
      "Stephanie Okada",
      "Tim Smith",
      "Francesca Thayer",
      "Marshall Harris",
      "Jessica Cochran",
      "Gabby Davis",
      "Nicole Hills",
      "Halle Taylor",
      "Jeremy Adams",
      "Connor Sharp",
      "Shane Frost",
      "Lauren Swygert",
      "Mark Kephart"
    ],
    "P: Additional Integrations": [
      "PandaDoc",
      "HubSpot",
      "Outlook / Google Calendar",
      "PAX8",
      "Zoho CRM",
      "Custom API",
      "Other"
    ]
  },
  "sectionsByType": {
    "Billing": [
      {
        "title": "1 - Client & Deal Info",
        "fields": [
          "Company",
          "Close Date",
          "MRR",
          "B: Contract Segment",
          "AE",
          "B: CSA Rep",
          "Primary Contact",
          "Contact Email",
          "Kickoff Target Date",
          "Go-Live Target Date",
          "B: Go-Live Hard Deadline",
          "B: Hard Deadline Reason",
          "Key Pain Points / Goals"
        ]
      },
      {
        "title": "Salesforce Value Planner",
        "fields": [
          "SF Business Issue",
          "SF Business Issue Details",
          "SF Business Issue Picklist",
          "SF Problems",
          "SF Solutions",
          "SF Value"
        ]
      },
      {
        "title": "2 - Core Requirements",
        "fields": [
          "B: Current Billing Platform",
          "B: Other Systems Replaced",
          "B: Customer / Account Count",
          "B: Data Export Available",
          "B: API Credentials Status",
          "B: Migration Notes",
          "B: Importer Count",
          "B: Monthly CDR Volume",
          "B: International Rating Required",
          "B: Importer Details"
        ]
      },
      {
        "title": "3 - Add-Ons & Integrations",
        "fields": [
          "Current Payment Processor",
          "Rev.io Payments",
          "Merchant Statements Available",
          "Payment Methods",
          "B: Tax Provider",
          "B: Existing Tax Account / Client ID",
          "B: Tax-Exempt Clients",
          "B: Traffic Study Completed",
          "B: Compliance Partner Name",
          "B: Compliance Partner Contact Email",
          "B: Tax Notes",
          "B: Catalog Size",
          "B: Catalog Export Available",
          "B: Rate Decks Available"
        ]
      },
      {
        "title": "4 - Contract Details",
        "fields": [
          "Contract Term",
          "Contract End Date",
          "Setup / One-time Fees",
          "Billing Start / Deferral Terms",
          "Specific Commitments"
        ]
      },
      {
        "title": "5 - Open Items & Project Flags",
        "fields": [
          "Open Items Before Kickoff",
          "Project Flags / Risks",
          "Sales Rep Update Notes",
          "Onboarding QA Notes"
        ]
      },
      {
        "title": "Brief Links",
        "fields": [
          "HTML/PDF Brief URL",
          "Salesforce URL"
        ]
      }
    ],
    "PSA": [
      {
        "title": "1 - Client & Deal Information",
        "fields": [
          "Company",
          "Close Date",
          "MRR",
          "Contract Term",
          "AE",
          "P: OC Assigned",
          "Primary Contact",
          "Contact Email",
          "P: Existing Rev.io Billing Client",
          "P: Business Vertical",
          "Key Pain Points / Goals",
          "Kickoff Target Date",
          "Kickoff Target Time",
          "P: Go-Live Complexity Tier",
          "Go-Live Target Date"
        ]
      },
      {
        "title": "Salesforce Value Planner",
        "fields": [
          "SF Business Issue",
          "SF Business Issue Details",
          "SF Business Issue Picklist",
          "SF Problems",
          "SF Solutions",
          "SF Value"
        ]
      },
      {
        "title": "2 - Core 8 - Required at Close",
        "fields": [
          "P: Current / Prior PSA",
          "P: Migration Complexity",
          "P: Customer / Record Count",
          "P: Migration Notes",
          "P: Accounting Software",
          "P: Two-Way Sync Required",
          "P: GL Codes Ready",
          "P: RMM Tool",
          "P: Integration Priority",
          "P: Other Integrations Needed",
          "Current Payment Processor",
          "Rev.io Payments",
          "Merchant Statements Available",
          "Payment Methods",
          "P: Dispatch Method",
          "P: Service Type"
        ]
      },
      {
        "title": "3 - Additional Configuration",
        "fields": [
          "P: Additional Integrations",
          "P: Integration Notes"
        ]
      },
      {
        "title": "4 - Contract Details & Addendums",
        "fields": [
          "Contract Term",
          "Contract End Date",
          "Setup / One-time Fees",
          "Billing Start / Deferral Terms",
          "Specific Commitments"
        ]
      },
      {
        "title": "5 - If NOT an Existing Billing Client",
        "fields": [
          "P: Billing / Finance Contact",
          "P: Current Billing System",
          "P: Payment / Merchant Contact",
          "P: Accounting Contact",
          "P: New Billing Client Notes"
        ]
      },
      {
        "title": "6 - Open Items & OC Flags",
        "fields": [
          "Open Items Before Kickoff",
          "Project Flags / Risks",
          "Sales Rep Update Notes",
          "Onboarding QA Notes"
        ]
      },
      {
        "title": "Brief Links",
        "fields": [
          "HTML/PDF Brief URL",
          "Salesforce URL"
        ]
      }
    ]
  },
  "systemFields": [
    "Company",
    "Brief Type",
    "SF Opportunity ID",
    "Salesforce URL",
    "HTML/PDF Brief URL",
    "Brief URL"
  ]
};
  const script = document.currentScript;
  const pageId = script?.dataset?.pageId || document.documentElement.dataset.notionPageId;
  const briefTypeHint = script?.dataset?.briefType || document.documentElement.dataset.briefType || '';
  let currentFields = {};

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (key === 'class') node.className = value;
      else if (key === 'text') node.textContent = value;
      else if (key === 'html') node.innerHTML = value;
      else if (key.startsWith('on') && typeof value === 'function') node.addEventListener(key.slice(2), value);
      else if (value !== false && value != null) node.setAttribute(key, value === true ? '' : String(value));
    }
    for (const child of children) node.append(child);
    return node;
  }

  function setStatus(message, tone = '') {
    const status = document.getElementById('notionBriefEditorStatus');
    if (!status) return;
    status.textContent = message || '';
    status.dataset.tone = tone;
  }

  function fieldType(name) {
    return CONFIG.fieldTypes[name] || 'rich_text';
  }

  function cleanId(name) {
    return 'notion-field-' + name.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
  }

  function isSystemField(name) {
    return CONFIG.systemFields.includes(name);
  }

  function normalizeSelectValue(value) {
    if (Array.isArray(value)) return value;
    if (value == null) return '';
    return String(value);
  }

  function inputForField(name, value) {
    const type = fieldType(name);
    const id = cleanId(name);
    const disabled = isSystemField(name);
    const base = { id, 'data-notion-field': name, disabled };

    if (type === 'select') {
      const options = CONFIG.selectOptions[name] || [];
      const select = el('select', base, [el('option', { value: '', text: '- Select -' })]);
      for (const option of options) {
        const child = el('option', { value: option, text: option });
        if (option === normalizeSelectValue(value)) child.selected = true;
        select.append(child);
      }
      return select;
    }

    if (type === 'multi_select') {
      return el('input', { ...base, type: 'text', value: Array.isArray(value) ? value.join(', ') : (value || ''), placeholder: 'Comma-separated values' });
    }

    if (type === 'number') return el('input', { ...base, type: 'number', value: value == null ? '' : value });
    if (type === 'date') return el('input', { ...base, type: 'date', value: value || '' });
    if (type === 'email') return el('input', { ...base, type: 'email', value: value || '' });
    if (type === 'url') return el('input', { ...base, type: 'url', value: value || '' });
    if (type === 'checkbox') {
      const input = el('input', { ...base, type: 'checkbox' });
      input.checked = value === true;
      return el('label', { class: 'notion-brief-checkbox' }, [input, document.createTextNode(' Yes')]);
    }

    const text = value == null ? '' : String(value);
    if (text.length > 80 || /notes|context|commitments|risks|items|details|terms/i.test(name)) {
      return el('textarea', { ...base, rows: text.length > 180 ? 5 : 3 }, [document.createTextNode(text)]);
    }
    return el('input', { ...base, type: 'text', value: text });
  }

  function renderEditor(fields) {
    currentFields = fields || {};
    const briefType = currentFields['Brief Type'] || briefTypeHint || 'PSA';
    const sections = CONFIG.sectionsByType[briefType] || CONFIG.sectionsByType.PSA || [];
    const root = document.getElementById('notionBriefEditor');
    if (!root) return;

    root.innerHTML = '';
    root.append(
      el('div', { class: 'notion-brief-editor-head' }, [
        el('div', {}, [
          el('div', { class: 'notion-brief-kicker', text: 'Editable brief fields' }),
          el('h2', { text: 'Edit this brief' }),
          el('p', { text: 'These fields save directly to the Onboarding Brief record. The section order mirrors the HTML/PDF brief.' }),
        ]),
        el('div', { class: 'notion-brief-actions' }, [
          el('button', { type: 'button', class: 'btn btn-primary', onclick: saveNotionBrief, text: 'Save Brief' }),
          el('button', { type: 'button', class: 'btn btn-secondary', onclick: loadBrief, text: 'Reload' }),
        ]),
      ]),
      el('div', { id: 'notionBriefEditorStatus', class: 'notion-brief-status', 'aria-live': 'polite' })
    );

    for (const section of sections) {
      const sectionNode = el('section', { class: 'notion-brief-section' }, [
        el('h3', { text: section.title }),
        el('div', { class: 'notion-brief-grid' }),
      ]);
      const grid = sectionNode.querySelector('.notion-brief-grid');
      for (const field of section.fields) {
        const value = fields[field];
        const control = inputForField(field, value);
        grid.append(el('div', { class: 'notion-brief-field' }, [
          el('label', { for: control.id || undefined, text: field }),
          control,
        ]));
      }
      root.append(sectionNode);
    }
  }

  function collectFields() {
    const fields = {};
    document.querySelectorAll('#notionBriefEditor [data-notion-field]').forEach(input => {
      const name = input.dataset.notionField;
      if (isSystemField(name) || input.disabled) return;
      if (input.type === 'checkbox') fields[name] = input.checked;
      else fields[name] = input.value;
    });
    return fields;
  }

  async function loadBrief() {
    if (!pageId) {
      setStatus('Missing backend record ID on this brief.', 'error');
      return;
    }
    setStatus('Loading brief fields...');
    const res = await fetch(CONFIG.workerUrl + '/brief?pageId=' + encodeURIComponent(pageId), { cache: 'no-store' });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Load failed');
    renderEditor(data.fields);
    setStatus('Brief fields loaded.', 'ok');
  }

  async function saveNotionBrief() {
    if (!pageId) {
      setStatus('Missing backend record ID on this brief.', 'error');
      return;
    }
    const fields = collectFields();
    setStatus('Saving brief...');
    const res = await fetch(CONFIG.workerUrl + '/brief', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pageId, fields }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Save failed');
    setStatus('Saved brief: ' + data.updatedFields.length + ' fields.', 'ok');
    await loadBrief();
  }

  function installStyles() {
    if (document.getElementById('notionBriefEditorStyles')) return;
    document.head.append(el('style', { id: 'notionBriefEditorStyles', text: `
      .notion-brief-editor {
        background: #111827;
        border: 1px solid rgba(255,255,255,.16);
        border-radius: 14px;
        margin: 24px 0;
        padding: 22px;
        box-shadow: 0 24px 70px rgba(0,0,0,.28);
      }
      .notion-brief-editor-head {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        align-items: flex-start;
        border-bottom: 1px solid rgba(255,255,255,.12);
        padding-bottom: 16px;
        margin-bottom: 16px;
      }
      .notion-brief-editor h2, .notion-brief-editor h3 { margin: 0; color: #f8fafc; }
      .notion-brief-editor p { color: #cbd5e1; margin: 6px 0 0; }
      .notion-brief-kicker { color: #38bdf8; font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
      .notion-brief-actions { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
      .notion-brief-status { min-height: 20px; color: #cbd5e1; font-size: 13px; margin-bottom: 14px; }
      .notion-brief-status[data-tone="ok"] { color: #86efac; }
      .notion-brief-status[data-tone="error"] { color: #fca5a5; }
      .notion-brief-section {
        border-top: 1px solid rgba(255,255,255,.10);
        padding-top: 16px;
        margin-top: 18px;
      }
      .notion-brief-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 14px;
        margin-top: 12px;
      }
      .notion-brief-field label {
        display: block;
        color: #dbeafe;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 6px;
      }
      .notion-brief-field input,
      .notion-brief-field select,
      .notion-brief-field textarea {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid rgba(255,255,255,.18);
        background: rgba(15,23,42,.92);
        color: #f8fafc;
        border-radius: 8px;
        padding: 10px 11px;
        font: inherit;
        min-height: 40px;
      }
      .notion-brief-field textarea { resize: vertical; }
      .notion-brief-field input:disabled {
        opacity: .65;
        cursor: not-allowed;
      }
      .notion-brief-checkbox {
        display: flex !important;
        align-items: center;
        gap: 8px;
        min-height: 40px;
        color: #f8fafc !important;
      }
      .notion-brief-checkbox input { width: auto; }
      @media (max-width: 720px) {
        .notion-brief-editor-head { display: block; }
        .notion-brief-actions { justify-content: flex-start; margin-top: 14px; }
      }
      body.notion-brief-connected .container > .section {
        display: none;
      }
      @media print {
        .notion-brief-editor { display: none; }
        body.notion-brief-connected .container > .section {
          display: block;
        }
      }
    ` }));
  }

  function insertEditorShell() {
    if (document.getElementById('notionBriefEditor')) return;
    const container = document.querySelector('.container') || document.querySelector('.content') || document.body;
    const anchor = container.querySelector('.actions') || container.firstElementChild;
    const editor = el('div', { id: 'notionBriefEditor', class: 'notion-brief-editor' }, [
      el('div', { class: 'notion-brief-status', text: 'Loading editable brief fields...' }),
    ]);
    if (anchor && anchor.nextSibling) container.insertBefore(editor, anchor.nextSibling);
    else container.prepend(editor);
  }

  function wireExistingSaveButton() {
    const button = document.querySelector('[data-brief-save-control]');
    if (!button) return;
    button.textContent = 'Save Brief';
    button.onclick = function(event) {
      event.preventDefault();
      saveNotionBrief().catch(err => setStatus('Save failed: ' + err.message, 'error'));
    };
  }

  ready(() => {
    document.body.classList.add('notion-brief-connected');
    installStyles();
    insertEditorShell();
    wireExistingSaveButton();
    window.saveBriefEdits = function() {
      return saveNotionBrief().catch(err => setStatus('Save failed: ' + err.message, 'error'));
    };
    loadBrief().catch(err => setStatus('Load failed: ' + err.message, 'error'));
  });
})();
