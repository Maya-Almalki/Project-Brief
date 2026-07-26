const STORAGE_KEY = 'project-brief-state-v1';

const projectFieldMap = {
  'الهويات البصرية': [
    { name: 'currentLogo', label: 'هل لديك شعار حالياً؟', type: 'select', options: ['نعم', 'لا', 'غير متأكد'] },
    { name: 'brandPersonality', label: 'شخصية العلامة التجارية', type: 'text' },
    { name: 'competitors', label: 'المنافسون الرئيسيون', type: 'text' },
    { name: 'targetAudience', label: 'الجمهور المستهدف', type: 'text' },
    { name: 'needLogo', label: 'هل تحتاج إلى شعار جديد؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needBrandGuidelines', label: 'هل تحتاج إلى دليل هوية؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needStationery', label: 'هل تحتاج إلى أدوات مكتبية؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needSocialTemplates', label: 'هل تحتاج إلى قوالب للتواصل الاجتماعي؟', type: 'select', options: ['نعم', 'لا'] }
  ],
  'الحملة الإعلانية': [
    { name: 'campaignPlatform', label: 'المنصة الإعلانية', type: 'select', options: ['جوجل', 'ميتا', 'تيك توك', 'سناب شات'] },
    { name: 'campaignGoal', label: 'هدف الحملة', type: 'text' },
    { name: 'campaignDuration', label: 'مدة الحملة', type: 'text' },
    { name: 'advertisingBudget', label: 'ميزانية الإعلان', type: 'text' },
    { name: 'targetAudience', label: 'الجمهور المستهدف', type: 'text' },
    { name: 'previousCampaigns', label: 'الحملات السابقة', type: 'text' }
  ],
  'تصميم الموقع': [
    { name: 'existingWebsite', label: 'هل يوجد موقع حالي؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'websiteUrl', label: 'رابط الموقع الحالي', type: 'text' },
    { name: 'numberOfPages', label: 'عدد الصفحات المتوقع', type: 'text' },
    { name: 'needCms', label: 'هل تحتاج إلى نظام إدارة محتوى؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needEcommerce', label: 'هل تحتاج إلى متجر إلكتروني؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needSeo', label: 'هل تحتاج إلى تحسين محركات البحث؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needBookingSystem', label: 'هل تحتاج إلى نظام حجز؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needBlog', label: 'هل تحتاج إلى مدونة؟', type: 'select', options: ['نعم', 'لا'] }
  ],
  'التطبيق المحمول': [
    { name: 'platforms', label: 'المنصات المطلوبة', type: 'text' },
    { name: 'loginRequired', label: 'هل يتطلب تسجيل دخول؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'notifications', label: 'هل تحتاج إلى إشعارات؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'paymentGateway', label: 'هل تحتاج إلى بوابة دفع؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'adminDashboard', label: 'هل تحتاج لوحة تحكم للمسؤول؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'apiIntegration', label: 'هل تحتاج إلى تكامل مع API؟', type: 'select', options: ['نعم', 'لا'] }
  ],
  'وسائل التواصل': [
    { name: 'platforms', label: 'المنصات المستهدفة', type: 'text' },
    { name: 'postsPerMonth', label: 'عدد المنشورات في الشهر', type: 'text' },
    { name: 'needCopywriting', label: 'هل تحتاج إلى كتابة محتوى؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needPhotography', label: 'هل تحتاج إلى تصوير فوتوغرافي؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needReels', label: 'هل تحتاج إلى ريلز؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'needPaidAds', label: 'هل تحتاج إلى إعلانات مدفوعة؟', type: 'select', options: ['نعم', 'لا'] }
  ],
  'إنتاج الفيديو': [
    { name: 'videoType', label: 'نوع الفيديو', type: 'text' },
    { name: 'duration', label: 'مدة الفيديو', type: 'text' },
    { name: 'scriptReady', label: 'هل السيناريو جاهز؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'voiceOver', label: 'هل تحتاج إلى تعليق صوتي؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'location', label: 'الموقع المطلوب للتصوير', type: 'text' },
    { name: 'motionGraphics', label: 'هل تحتاج إلى موشن جرافيك؟', type: 'select', options: ['نعم', 'لا'] },
    { name: 'droneShots', label: 'هل تحتاج إلى تصوير بالدرون؟', type: 'select', options: ['نعم', 'لا'] }
  ]
};

const state = {
  currentStep: 1,
  formData: {},
  theme: 'light'
};
state.savedProjects = [];

const fieldLabelMap = {
  clientName: 'اسم العميل',
  companyName: 'اسم الشركة',
  email: 'البريد الإلكتروني',
  phone: 'رقم الهاتف',
  website: 'الموقع الإلكتروني',
  industry: 'الصناعة',
  projectName: 'اسم المشروع',
  projectType: 'نوع المشروع',
  budget: 'الميزانية',
  timelinePerson: 'المسؤول عن المشروع',
  timelineDate: 'تاريخ بدء المشروع',
  deadline: 'تاريخ التسليم النهائي',
  projectDescription: 'وصف المشروع',
  objectives: 'الأهداف',
  projectStatus: 'حالة المشروع',
  businessChallenges: 'التحديات التجارية',
  successMetrics: 'مقاييس النجاح',
  preferredStyle: 'الأسلوب المفضل',
  references: 'المراجع',
  additionalNotes: 'ملاحظات إضافية',
  fileUpload: 'رفع ملف',
  currentLogo: 'هل لديك شعار حالياً؟',
  brandPersonality: 'شخصية العلامة التجارية',
  competitors: 'المنافسون الرئيسيون',
  targetAudience: 'الجمهور المستهدف',
  needLogo: 'هل تحتاج إلى شعار جديد؟',
  needBrandGuidelines: 'هل تحتاج إلى دليل هوية؟',
  needStationery: 'هل تحتاج إلى أدوات مكتبية؟',
  needSocialTemplates: 'هل تحتاج إلى قوالب للتواصل الاجتماعي؟',
  campaignPlatform: 'المنصة الإعلانية',
  campaignGoal: 'هدف الحملة',
  campaignDuration: 'مدة الحملة',
  advertisingBudget: 'ميزانية الإعلان',
  previousCampaigns: 'الحملات السابقة',
  existingWebsite: 'هل يوجد موقع حالي؟',
  websiteUrl: 'رابط الموقع الحالي',
  numberOfPages: 'عدد الصفحات المتوقع',
  needCms: 'هل تحتاج إلى نظام إدارة محتوى؟',
  needEcommerce: 'هل تحتاج إلى متجر إلكتروني؟',
  needSeo: 'هل تحتاج إلى تحسين محركات البحث؟',
  needBookingSystem: 'هل تحتاج إلى نظام حجز؟',
  needBlog: 'هل تحتاج إلى مدونة؟',
  platforms: 'المنصات',
  loginRequired: 'هل يتطلب تسجيل دخول؟',
  notifications: 'هل تحتاج إلى إشعارات؟',
  paymentGateway: 'هل تحتاج إلى بوابة دفع؟',
  adminDashboard: 'هل تحتاج لوحة تحكم للمسؤول؟',
  apiIntegration: 'هل تحتاج إلى تكامل مع API؟',
  platformsSocial: 'المنصات المستهدفة',
  postsPerMonth: 'عدد المنشورات في الشهر',
  needCopywriting: 'هل تحتاج إلى كتابة محتوى؟',
  needPhotography: 'هل تحتاج إلى تصوير فوتوغرافي؟',
  needReels: 'هل تحتاج إلى ريلز؟',
  needPaidAds: 'هل تحتاج إلى إعلانات مدفوعة؟',
  videoType: 'نوع الفيديو',
  duration: 'مدة الفيديو',
  scriptReady: 'هل السيناريو جاهز؟',
  voiceOver: 'هل تحتاج إلى تعليق صوتي؟',
  location: 'الموقع المطلوب للتصوير',
  motionGraphics: 'هل تحتاج إلى موشن جرافيك؟',
  droneShots: 'هل تحتاج إلى تصوير بالدرون؟'
};

const form = document.getElementById('briefFormElement');
const progressFill = document.getElementById('progressFill');
const saveStatus = document.getElementById('saveStatus');
const stepItems = Array.from(document.querySelectorAll('.step-item'));
const panels = Array.from(document.querySelectorAll('.step-panel'));
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');
const resetButton = document.getElementById('resetBtn');
const themeToggle = document.getElementById('themeToggle');
const reviewContent = document.getElementById('reviewContent');
const dynamicQuestions = document.getElementById('dynamicQuestions');
const uploadStatus = document.getElementById('uploadStatus');
const projectTypeSelect = document.getElementById('projectType');
const formActions = document.querySelector('.form-actions');
let saveStatusTimer = null;

function init() {
  bindEvents();
  loadState();
  renderDynamicQuestions();
  hydrateForm();
  updateFloatingLabels();
  updateCharacterCounters();
  renderReview();
  renderProjectStatus();
  renderSavedProjects();
  bindSavedProjectsControls();
  renderStep();
}

function bindEvents() {
  nextButton.addEventListener('click', handleNext);
  form.addEventListener('submit', handleSubmit);
  prevButton.addEventListener('click', handlePrev);
  resetButton.addEventListener('click', handleReset);
  form.addEventListener('input', handleFormInput);
  form.addEventListener('change', handleFormInput);
  themeToggle.addEventListener('click', toggleTheme);
  projectTypeSelect.addEventListener('change', renderDynamicQuestions);
  document.getElementById('startOverBtn').addEventListener('click', startOver);
  document.getElementById('exportBtn').addEventListener('click', exportProfessionalDocument);
  document.getElementById('fileUpload').addEventListener('change', handleFileUpload);
   const exportSelect = document.getElementById('exportTemplateSelect');
   if (exportSelect) {
     exportSelect.addEventListener('change', () => {
       showToast('تم اختيار قالب التصدير.', 'success', 1800);
     });
   }

  document.querySelectorAll('.step-item').forEach((button) => {
    button.addEventListener('click', () => {
      const targetStep = Number(button.dataset.step);
      if (targetStep < state.currentStep) {
        state.currentStep = targetStep;
        renderStep();
      }
    });
  });
}

function handleSubmit(event) {
  event.preventDefault();
  handleNext();
}

function handleFormInput(event) {
  const { target } = event;
  const rawValue = target.type === 'checkbox' ? (target.checked ? 'Yes' : 'No') : target.value;
  const value = typeof rawValue === 'string' ? rawValue.trim() : rawValue;
  state.formData[target.name] = value;
  saveState();
  updateSaveStatus('تم حفظ البيانات بنجاح.', true);
  updateFloatingLabel(target);
  if (target.name === 'projectType') {
    renderDynamicQuestions();
    hydrateForm();
  }
  updateCharacterCounters();
  renderReview();
  renderProjectStatus();
}

function handleReset() {
  startOver();
}

function handleNext() {
  if (state.currentStep === 5) {
    if (!validateStep(5)) {
      return;
    }
    submitBrief();
    return;
  }

  if (!validateStep(state.currentStep)) {
    return;
  }

  state.currentStep += 1;
  renderStep();
  saveState();
}

function handlePrev() {
  if (state.currentStep > 1) {
    state.currentStep -= 1;
    renderStep();
    saveState();
  }
}

function renderStep() {
  panels.forEach((panel) => {
    panel.classList.toggle('active', Number(panel.dataset.step) === state.currentStep);
  });

  stepItems.forEach((item) => {
    const isActive = Number(item.dataset.step) === state.currentStep;
    const isComplete = Number(item.dataset.step) < state.currentStep;
    item.classList.toggle('active', isActive);
    item.classList.toggle('complete', isComplete);
  });

  const progressWidth = `${(state.currentStep / 6) * 100}%`;
  progressFill.style.width = progressWidth;

  prevButton.disabled = state.currentStep === 1 || state.currentStep === 6;
  nextButton.innerHTML = state.currentStep === 5 ? '<i class="fa-solid fa-paper-plane"></i> إرسال' : state.currentStep === 6 ? 'تم' : 'التالي';

  if (state.currentStep === 6) {
    nextButton.disabled = true;
    formActions.style.display = 'none';
  } else {
    nextButton.disabled = false;
    formActions.style.display = 'flex';
  }

  if (state.currentStep === 5) {
    renderReview();
  }
}

function validateStep(step) {
  const panel = document.querySelector(`.step-panel[data-step="${step}"]`);
  const fields = Array.from(panel.querySelectorAll('input, select, textarea'));
  let isValid = true;
  let firstInvalid = null;

  fields.forEach((field) => {
    clearFieldError(field);
    const value = field.value ? field.value.trim() : '';
    let fieldIsValid = true;

    if (field.hasAttribute('required') && !value) {
      showFieldError(field, 'يرجى تعبئة هذا الحقل.');
      fieldIsValid = false;
    }

    if (!fieldIsValid) {
      isValid = false;
      if (!firstInvalid) {
        firstInvalid = field;
      }
    }
  });

  if (!isValid && firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalid.focus({ preventScroll: true });
  }

  return isValid;
}

function showFieldError(field, message) {
  const wrapper = field.closest('.field-group');
  if (!wrapper) {
    return;
  }
  wrapper.classList.add('error');
  // ARIA
  try {
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', `${field.name}-error`);
  } catch (e) {}
  const existingError = wrapper.querySelector('.error-text');
  if (existingError) {
    existingError.textContent = message;
    existingError.id = `${field.name}-error`;
    return;
  }
  const error = document.createElement('span');
  error.className = 'error-text';
  error.id = `${field.name}-error`;
  error.textContent = message;
  error.setAttribute('role', 'alert');
  wrapper.appendChild(error);
}

function clearFieldError(field) {
  const wrapper = field.closest('.field-group');
  if (!wrapper) {
    return;
  }
  wrapper.classList.remove('error');
  try {
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  } catch (e) {}
  const error = wrapper.querySelector('.error-text');
  if (error) {
    error.remove();
  }
}

function renderDynamicQuestions() {
  const projectType = projectTypeSelect.value || 'الهويات البصرية';
  const fields = projectFieldMap[projectType] || projectFieldMap['الهويات البصرية'];
  dynamicQuestions.innerHTML = '';

  const fragment = document.createDocumentFragment();
  fields.forEach((field) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'field-group';

    if (field.type === 'select') {
      const select = document.createElement('select');
      select.name = field.name;
      select.id = field.name;
      select.required = true;
      select.innerHTML = field.options
        .map((option) => `<option value="${option}">${option}</option>`)
        .join('');
      wrapper.appendChild(select);
      const label = document.createElement('label');
      label.htmlFor = field.name;
      label.textContent = field.label;
      wrapper.appendChild(label);
    } else {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = field.name;
      input.id = field.name;
      input.required = true;
      wrapper.appendChild(input);
      const label = document.createElement('label');
      label.htmlFor = field.name;
      label.textContent = field.label;
      wrapper.appendChild(label);
    }

    fragment.appendChild(wrapper);
  });

  dynamicQuestions.appendChild(fragment);
  hydrateForm();
  updateFloatingLabels();
}

function updateFloatingLabels() {
  document.querySelectorAll('.field-group input, .field-group select, .field-group textarea').forEach((field) => {
    updateFloatingLabel(field);
  });
}

function updateFloatingLabel(field) {
  const wrapper = field.closest('.field-group');
  if (!wrapper) {
    return;
  }
  wrapper.classList.toggle('has-value', Boolean(field.value && field.value.trim()));
}

function hydrateForm() {
  const formElements = form.elements;
  Object.entries(state.formData).forEach(([name, value]) => {
    const field = formElements[name];
    if (!field) {
      return;
    }
    if (field.type === 'checkbox') {
      field.checked = Boolean(value);
    } else if (field.type === 'file') {
      return;
    } else {
      field.value = value;
    }
  });

  if (state.formData.projectType) {
    projectTypeSelect.value = state.formData.projectType;
  }

  updateFloatingLabels();
  updateCharacterCounters();
}

function updateCharacterCounters() {
  document.querySelectorAll('.counter').forEach((counter) => {
    const target = document.getElementById(counter.dataset.counter);
    if (!target) {
      return;
    }
    const max = Number(counter.dataset.max || 0);
    const count = target.value.length;
    counter.textContent = `${count}/${max}`;
  });
}

function renderReview() {
  const sections = [
    {
      title: 'معلومات العميل',
      fields: ['clientName', 'companyName', 'email', 'phone', 'website', 'industry'],
      step: 1
    },
    {
      title: 'تفاصيل المشروع',
      fields: ['projectName', 'projectType', 'budget', 'projectStatus', 'timelinePerson', 'timelineDate', 'deadline', 'projectDescription', 'objectives'],
      step: 2
    },
    {
      title: 'الأسئلة الديناميكية',
      fields: Object.keys(state.formData).filter((name) => !['clientName', 'companyName', 'email', 'phone', 'website', 'industry', 'projectName', 'projectType', 'budget', 'timelinePerson', 'timelineDate', 'deadline', 'projectDescription', 'objectives', 'businessChallenges', 'successMetrics', 'preferredStyle', 'references', 'additionalNotes', 'fileUpload'].includes(name)),
      step: 3
    },
    {
      title: 'الأسئلة العامة',
      fields: ['businessChallenges', 'successMetrics', 'preferredStyle', 'references', 'additionalNotes', 'fileUpload'],
      step: 4
    }
  ];

  reviewContent.innerHTML = '';
  const fragment = document.createDocumentFragment();

  sections.forEach((section) => {
    const card = document.createElement('article');
    card.className = 'review-card';

    const header = document.createElement('div');
    header.className = 'review-card-header';
    header.innerHTML = `<h4>${section.title}</h4><button type="button" class="edit-link" data-edit-step="${section.step}">تعديل</button>`;
    card.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'review-grid';

    section.fields.forEach((name) => {
      const value = state.formData[name] || '—';
      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = `<strong>${formatLabel(name)}</strong><span>${escapeHtml(String(value))}</span>`;
      grid.appendChild(item);
    });

    card.appendChild(grid);
    fragment.appendChild(card);
  });

  reviewContent.appendChild(fragment);

  reviewContent.querySelectorAll('[data-edit-step]').forEach((button) => {
    button.addEventListener('click', () => {
      const step = Number(button.dataset.editStep);
      state.currentStep = step;
      renderStep();
    });
  });
}

function renderProjectStatus() {
  const section = document.getElementById('projectsStatus');
  const grid = document.getElementById('projectStatusGrid');
  if (!section || !grid) {
    return;
  }
  const projectName = state.formData.projectName?.trim();

  if (state.currentStep !== 6 || !projectName) {
    section.classList.add('hidden');
    grid.innerHTML = '';
    return;
  }

  section.classList.remove('hidden');
  const status = state.formData.projectStatus || 'قيد التنفيذ';
  const chipClass = status === 'مكتمل' ? 'done' : 'pending';
  const cardClass = status === 'مكتمل' ? 'completed' : 'in-progress';
  const currentStep = status === 'مكتمل' ? 3 : 1;

  const timelineSteps = [
    status === 'مكتمل' ? 'التحليل' : 'MoodBoard',
    status === 'مكتمل' ? 'التصميم' : 'Design Draft',
    status === 'مكتمل' ? 'التسليم' : 'Final Draft'
  ];

  const projectType = state.formData.projectType || '—';
  const budget = state.formData.budget || '—';
  const timelinePerson = state.formData.timelinePerson || '—';
  const timelineDate = state.formData.timelineDate || '—';
  const deadline = state.formData.deadline || '—';

  grid.innerHTML = `
    <article class="project-card ${cardClass}">
      <div class="project-card-header">
        <div>
          <span class="project-label">${escapeHtml(projectType)}</span>
          <h5>${escapeHtml(projectName)}</h5>
        </div>
        <span class="project-status-chip ${chipClass}">${escapeHtml(status)}</span>
      </div>
      <p>الميزانية: ${escapeHtml(budget)} • المسؤول: ${escapeHtml(timelinePerson)}</p>
      <p>المدة: ${escapeHtml(timelineDate)} إلى ${escapeHtml(deadline)}</p>
      <div class="project-timeline">
        ${timelineSteps.map((step, index) => {
          const stateClass = index + 1 <= currentStep ? (index + 1 === currentStep ? 'active' : 'done') : '';
          return `
            <div class="timeline-node ${stateClass}">
              <span class="timeline-dot"></span>
              <span>${escapeHtml(step)}</span>
            </div>
          `;
        }).join('')}
      </div>
    </article>
  `;
}

function renderSavedProjects() {
  const savedSectionId = 'savedProjectsSection';
  let savedSection = document.getElementById(savedSectionId);
  const savedProjectsContainer = document.getElementById('savedProjectsContainer');

  if (!savedProjectsContainer) {
    return;
  }

  // get controls
  const searchEl = document.getElementById('savedSearch');
  const filterStatusEl = document.getElementById('savedFilterStatus');
  const sortEl = document.getElementById('savedSort');

  if (state.savedProjects.length === 0) {
    savedProjectsContainer.innerHTML = '<p class="empty-note">لا توجد موجزات محفوظة حتى الآن.</p>';
    return;
  }

  const term = (searchEl && searchEl.value || '').toLowerCase().trim();
  const statusFilter = filterStatusEl ? filterStatusEl.value : 'all';
  const sortMode = sortEl ? sortEl.value : 'date_desc';

  const filtered = state.savedProjects.filter((project) => {
    if (statusFilter !== 'all') {
      const st = (project.data && project.data.projectStatus) || project.status || '';
      if (st !== statusFilter) return false;
    }
    if (!term) return true;
    const name = (project.projectName || '').toLowerCase();
    const type = ((project.data && project.data.projectType) || '').toLowerCase();
    const status = ((project.data && project.data.projectStatus) || project.status || '').toLowerCase();
    return name.includes(term) || type.includes(term) || status.includes(term);
  });

  const sorted = filtered.sort((a, b) => {
    if (sortMode === 'date_desc') return new Date(b.savedAt) - new Date(a.savedAt);
    if (sortMode === 'date_asc') return new Date(a.savedAt) - new Date(b.savedAt);
    if (sortMode === 'name_asc') return (a.projectName || '').localeCompare(b.projectName || '');
    if (sortMode === 'name_desc') return (b.projectName || '').localeCompare(a.projectName || '');
    return 0;
  });

  const projectsHtml = sorted
    .slice(0, 50)
    .map((project) => {
      const date = new Date(project.savedAt).toLocaleDateString('ar-EG', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      return `
        <article class="saved-project-card" data-id="${project.id}">
          <div class="saved-project-row">
            <div>
              <h5>${escapeHtml(project.projectName)}</h5>
              <p>${escapeHtml(project.data.projectType || '—')} • ${escapeHtml(project.data.projectStatus || '—')}</p>
            </div>
            <span class="saved-project-date">${escapeHtml(date)}</span>
          </div>
          <div class="saved-project-meta">
            <span>الميزانية: ${escapeHtml(project.data.budget || '—')}</span>
            <span>المسؤول: ${escapeHtml(project.data.timelinePerson || '—')}</span>
          </div>
          <div class="saved-project-actions">
            <button class="view-btn" data-id="${project.id}">عرض</button>
            <button class="restore-btn" data-id="${project.id}">استعادة</button>
            <button class="delete-btn" data-id="${project.id}">حذف</button>
          </div>
        </article>
      `;
    })
    .join('');

  savedProjectsContainer.innerHTML = projectsHtml;

  // attach actions
  savedProjectsContainer.querySelectorAll('.view-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      viewSavedProject(id);
    });
  });

  savedProjectsContainer.querySelectorAll('.restore-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      restoreSavedProject(id);
    });
  });

  savedProjectsContainer.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      deleteSavedProject(id);
    });
  });

  // ensure controls are bound
  bindSavedProjectsControls();
}

function debounce(fn, wait = 250) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

function bindSavedProjectsControls() {
  const searchEl = document.getElementById('savedSearch');
  const filterStatusEl = document.getElementById('savedFilterStatus');
  const sortEl = document.getElementById('savedSort');
  if (bindSavedProjectsControls._bound) return;
  if (searchEl) {
    searchEl.addEventListener('input', debounce(() => {
      renderSavedProjects();
    }, 220));
  }
  if (filterStatusEl) {
    filterStatusEl.addEventListener('change', () => renderSavedProjects());
  }
  if (sortEl) {
    sortEl.addEventListener('change', () => renderSavedProjects());
  }
  bindSavedProjectsControls._bound = true;
}

function viewSavedProject(id) {
  const project = state.savedProjects.find((p) => p.id === id);
  if (!project) return;

  // create modal
  const modal = document.createElement('div');
  modal.className = 'saved-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  const fields = Object.keys(project.data || {}).map((key) => {
    const label = formatLabel(key);
    const value = project.data[key] || '—';
    return `<div class="saved-field"><strong>${escapeHtml(label)}</strong><span>${escapeHtml(String(value))}</span></div>`;
  }).join('');

  modal.innerHTML = `
    <div class="saved-modal-card">
      <div class="saved-modal-header">
        <h3>${escapeHtml(project.projectName)}</h3>
        <div class="saved-modal-actions">
          <button class="restore-btn" data-id="${project.id}" aria-label="استعادة الموجز">استعادة</button>
          <button class="close-modal" aria-label="إغلاق النافذة">إغلاق</button>
        </div>
      </div>
      <div class="saved-modal-body">${fields}</div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.close-modal');
  const restoreBtn = modal.querySelector('.restore-btn');

  closeBtn.addEventListener('click', () => {
    modal.remove();
  });

  restoreBtn.addEventListener('click', () => {
    restoreSavedProject(project.id);
    modal.remove();
  });

  // focus management and keyboard handling
  closeBtn.focus();
  const escHandler = (e) => {
    if (e.key === 'Escape') modal.remove();
  };
  document.addEventListener('keydown', escHandler);
  modal.addEventListener('remove', () => {
    document.removeEventListener('keydown', escHandler);
  });
}

function restoreSavedProject(id) {
  const project = state.savedProjects.find((p) => p.id === id);
  if (!project) return;
  // confirm overwrite if current form has data
  const currentJson = JSON.stringify(state.formData || {});
  const savedJson = JSON.stringify(project.data || {});
  if (currentJson !== '{}' && currentJson !== savedJson) {
    if (!window.confirm('النموذج الحالي يحتوي على بيانات غير محفوظة. هل ترغب في استبدالها بالموجز المستعاد؟')) return;
  }
  // load into form
  state.formData = JSON.parse(JSON.stringify(project.data || {}));
  hydrateForm();
  renderReview();
    updateSaveStatus('تم استعادة الموجز إلى النموذج.', true);
    showToast('تم استعادة الموجز إلى النموذج.', 'success', 2000);
  // move user to review step
  state.currentStep = 5;
  renderStep();
}

function deleteSavedProject(id) {
  if (!window.confirm('هل تريد حذف هذا الموجز نهائياً؟')) return;
  state.savedProjects = state.savedProjects.filter((p) => p.id !== id);
  saveState();
    renderSavedProjects();
    showToast('تم حذف الموجز.', 'warn', 2400);
  updateSaveStatus('تم حذف الموجز.', true);
}

function formatLabel(name) {
  return fieldLabelMap[name] || name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase())
    .replace(/([a-z])([A-Z])/g, '$1 $2');
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function handleFileUpload(event) {
  const [file] = event.target.files;
  state.formData.fileUpload = file ? file.name : '';
  uploadStatus.textContent = file ? `تم إرفاق: ${file.name}` : 'أرفق ملفات الإلهام أو المستندات أو أصول العلامة التجارية.';
  saveState();
  renderReview();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  themeToggle.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  saveState();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      currentStep: state.currentStep,
      formData: state.formData,
      theme: state.theme,
      savedProjects: state.savedProjects
    }));
  } catch (error) {
    console.warn('تعذر حفظ البيانات محلياً، وستبقى متاحة حتى إغلاق الصفحة.', error);
  }
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    state.currentStep = parsed.currentStep || 1;
    state.formData = parsed.formData || {};
    state.theme = parsed.theme || 'light';
    state.savedProjects = parsed.savedProjects || [];
    document.documentElement.setAttribute('data-theme', state.theme);
    themeToggle.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    updateSaveStatus('تم استرجاع البيانات المحفوظة بنجاح.');
  } catch (error) {
    console.error('تعذر تحميل الحالة المحفوظة', error);
  }
}

function updateSaveStatus(message, isTransient = true) {
  if (!saveStatus) {
    return;
  }

  saveStatus.textContent = message;
  saveStatus.classList.toggle('active', isTransient);

  if (isTransient) {
    clearTimeout(saveStatusTimer);
    saveStatusTimer = window.setTimeout(() => {
      saveStatus.classList.remove('active');
    }, 2500);
  }
}

/* toast system for short notifications */
function ensureToastContainer() {
  let c = document.querySelector('.toast-container');
  if (!c) {
    c = document.createElement('div');
    c.className = 'toast-container';
    document.body.appendChild(c);
  }
  return c;
}

function showToast(message, type = 'success', timeout = 3500) {
  const container = ensureToastContainer();
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.setAttribute('role', 'status');
  t.innerHTML = `<div class="toast-message">${escapeHtml(message)}</div>`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(6px)';
    setTimeout(() => t.remove(), 400);
  }, timeout);
}

function submitBrief() {
  const projectName = state.formData.projectName?.trim();
  if (projectName) {
    // save a full snapshot of the form so it can be fully restored later
    state.savedProjects.unshift({
      id: Date.now(),
      savedAt: new Date().toISOString(),
      projectName,
      data: JSON.parse(JSON.stringify(state.formData))
    });
    // keep savedProjects list reasonable length (optional)
    if (state.savedProjects.length > 50) {
      state.savedProjects.length = 50;
    }
  }
  saveState();
  renderSavedProjects();

  state.currentStep = 6;
  renderStep();
  renderProjectStatus();
  showToast('تم إرسال الموجز وحفظه بنجاح.', 'success');

  const successCheck = document.getElementById('successCheck');
  successCheck.classList.remove('animate');
  void successCheck.offsetWidth;
  successCheck.classList.add('animate');
}

function startOver() {
  if (!window.confirm('هل ترغب في بدء موجز جديد؟ سيبقى الموجز السابق محفوظاً.')) {
    return;
  }
  state.currentStep = 1;
  state.formData = {};
  state.theme = 'light';
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  form.reset();
  form.removeAttribute('inert');
  form.style.pointerEvents = 'auto';
  form.querySelectorAll('input, select, textarea').forEach((field) => {
    field.disabled = false;
    field.readOnly = false;
    field.removeAttribute('disabled');
    field.removeAttribute('readonly');
    clearFieldError(field);
  });
  projectTypeSelect.value = 'الهويات البصرية';
  uploadStatus.textContent = 'أرفق ملفات الإلهام أو المستندات أو أصول الهوية البصرية إذا كانت متاحة.';
  renderDynamicQuestions();
  hydrateForm();
  renderReview();
  renderProjectStatus();
  renderSavedProjects();
  renderStep();
  saveState();
  window.requestAnimationFrame(() => {
    const firstField = document.getElementById('clientName');
    firstField.focus();
    firstField.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  updateSaveStatus('تمت إعادة تعيين النموذج بنجاح.');
  showToast('تمت إعادة تعيين النموذج.', 'success', 2200);
}

function exportProfessionalDocument() {
  const templateType = document.getElementById('exportTemplateSelect')?.value || 'official';
  const content = generateExportTemplateHtml(templateType);
  const fileName = templateType === 'client' ? 'client-project-summary.html' : 'project-summary-official.html';
  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast('تم إنشاء المستند بنجاح.', 'success', 3200);
}

function generateExportTemplateHtml(templateType) {
  const data = state.formData || {};
  const value = (name) => escapeHtml(data[name] || '—');
  const sectionFields = [
    { title: 'معلومات العميل', fields: ['clientName', 'companyName', 'email', 'phone', 'website', 'industry'] },
    { title: 'تفاصيل المشروع الرئيسية', fields: ['projectName', 'projectType', 'projectStatus', 'budget', 'timelinePerson', 'timelineDate', 'deadline'] },
    { title: 'وصف المشروع والأهداف', fields: ['projectDescription', 'objectives'] },
    { title: 'الاستراتيجية العامة', fields: ['businessChallenges', 'successMetrics', 'preferredStyle', 'references', 'additionalNotes', 'fileUpload'] }
  ];

  const dynamicFields = projectFieldMap[data.projectType] || projectFieldMap['الهويات البصرية'];
  if (dynamicFields.length) {
    sectionFields.push({ title: 'أسئلة متخصصة للمشروع', fields: dynamicFields.map((field) => field.name) });
  }

  const mainTitle = templateType === 'client' ? 'ملخص العميل' : 'ملخص المشروع الرسمي';
  const description = templateType === 'client'
    ? 'وثيقة موجز موجهة للعميل توضح الرؤية والأهداف وأسلوب التنفيذ.'
    : 'وثيقة موجز رسمي مُصمم للشركات والفرق التنفيذية لعرض نطاق المشروع وجدول العمل بوضوح.';

  const keyFacts = [
    { label: 'الحالة', value: value('projectStatus') },
    { label: 'نوع المشروع', value: value('projectType') },
    { label: 'الميزانية', value: value('budget') },
    { label: 'تاريخ البدء', value: value('timelineDate') },
    { label: 'التسليم المتوقع', value: value('deadline') }
  ];

  const sectionsHtml = sectionFields.map((section) => {
    const items = section.fields.map((name) => {
      return `<div class="item"><strong>${escapeHtml(formatLabel(name))}</strong><span>${value(name)}</span></div>`;
    }).join('');
    return `<section><h2>${escapeHtml(section.title)}</h2><div class="grid">${items}</div></section>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(mainTitle)}</title>
    <style>
      body { margin: 0; padding: 0; font-family: 'Cairo', sans-serif; background: #eef2ff; color: #111827; }
      .page { max-width: 980px; margin: 26px auto; background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 26px 60px rgba(15, 23, 42, 0.14); }
      .cover { padding: 40px 42px 36px; background: linear-gradient(135deg, #0f172a, #1e3a8a); color: white; }
      .cover h1 { margin: 0 0 8px; font-size: 2.6rem; line-height: 1.05; }
      .cover p { margin: 0; opacity: 0.92; max-width: 720px; font-size: 1rem; }
      .cover .meta { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 24px; }
      .cover .meta-item { background: rgba(255,255,255,0.14); padding: 18px 16px; border-radius: 18px; }
      .cover .meta-item strong { display: block; font-size: 0.8rem; opacity: 0.82; margin-bottom: 8px; }
      .cover .meta-item span { font-size: 0.96rem; font-weight: 700; }
      .body { padding: 32px 36px 38px; }
      section { margin-bottom: 22px; }
      h2 { margin: 0 0 16px; font-size: 1.1rem; color: #1e3a8a; }
      .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
      .item { padding: 18px 20px; border: 1px solid #e2e8f0; border-radius: 18px; background: #f8fafc; }
      .item strong { display: block; margin-bottom: 10px; font-size: 0.82rem; color: #475569; text-transform: uppercase; letter-spacing: 0.04em; }
      .item span { display: block; font-size: 0.96rem; color: #0f172a; white-space: pre-wrap; line-height: 1.7; }
      .fact-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-bottom: 22px; }
      .fact-card { padding: 18px 16px; border-radius: 18px; background: #eff6ff; border: 1px solid #dbeafe; }
      .fact-card strong { display: block; font-size: 0.82rem; color: #475569; margin-bottom: 10px; }
      .fact-card span { font-size: 1rem; font-weight: 700; color: #1d4ed8; }
      .footer { padding: 20px 36px 28px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; font-size: 0.9rem; color: #475569; }
      .footer span { display: inline-block; }
      @media (max-width: 820px) { .cover .meta, .fact-grid, .grid { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="cover">
        <h1>${escapeHtml(mainTitle)}</h1>
        <p>${escapeHtml(description)}</p>
        <div class="meta">
          <div class="meta-item"><strong>اسم المشروع</strong><span>${value('projectName')}</span></div>
          <div class="meta-item"><strong>العميل</strong><span>${value('clientName')}</span></div>
          <div class="meta-item"><strong>الجهة</strong><span>${value('companyName')}</span></div>
        </div>
      </div>
      <div class="body">
        <div class="fact-grid">
          ${keyFacts.map((fact) => `<div class="fact-card"><strong>${escapeHtml(fact.label)}</strong><span>${fact.value}</span></div>`).join('')}
        </div>
        ${sectionsHtml}
      </div>
      <div class="footer">
        <span>تم الإنشاء بتاريخ ${new Date().toLocaleDateString('ar-EG', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
        <span>منصة موجز المشروع — وثيقة رسمية للشركة والعميل</span>
      </div>
    </div>
  </body>
</html>`;
}

function toggleFaq(event) {
  const item = event.currentTarget.closest('.faq-item');
  item.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', init);
