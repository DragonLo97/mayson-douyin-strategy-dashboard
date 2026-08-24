(() => {
  "use strict";

  const money = (value, digits = 2) => {
    const safe = Number.isFinite(value) ? value : 0;
    return `¥${safe.toLocaleString("zh-CN", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    })}`;
  };

  const wholeMoney = (value) => `¥${Math.round(value).toLocaleString("zh-CN")}`;
  const percent = (value, digits = 1) => `${value.toFixed(digits)}%`;
  const byId = (id) => document.getElementById(id);

  const modelDefaults = {
    "self-live": {
      label: "品牌自播",
      price: 159,
      skuCost: 68.6667,
      orders: 2000,
      refund: 8,
      platform: 3,
      tax: 3,
      commission: 0,
      serviceRate: 0,
      adRate: 20,
      fulfillment: 8,
      aftersales: 2,
      peopleCost: 24000,
      facilityCost: 6000,
      otherFixed: 2000,
      placementFee: 0
    },
    creator: {
      label: "达人分销",
      price: 159,
      skuCost: 68.6667,
      orders: 1000,
      refund: 12,
      platform: 3,
      tax: 3,
      commission: 18,
      serviceRate: 0,
      adRate: 0,
      fulfillment: 8,
      aftersales: 2,
      peopleCost: 8000,
      facilityCost: 0,
      otherFixed: 1000,
      placementFee: 0
    },
    "product-card": {
      label: "商品卡",
      price: 159,
      skuCost: 68.6667,
      orders: 1500,
      refund: 6,
      platform: 3,
      tax: 3,
      commission: 0,
      serviceRate: 0,
      adRate: 12,
      fulfillment: 8,
      aftersales: 1.5,
      peopleCost: 6000,
      facilityCost: 2000,
      otherFixed: 0,
      placementFee: 0
    }
  };

  const pathData = [
    {
      stage: "起点 · 先占窄人群",
      title: "从跑步、铁三、越野等耐力场景切入",
      copy: "创始团队公开复盘显示，迈胜2023年进入市场时没有先做泛营养，而是从跑步、铁人三项等专业耐力运动切入。窄场景降低了教育成本，也让产品功能更容易被验证。",
      proofLabel: "验证动作",
      proof: "赛事、跑团、运动员和垂直内容共同构成第一轮信任。",
      source: "https://m.eeo.com.cn/2026/0711/952870.shtml"
    },
    {
      stage: "产品 · 解决具体麻烦",
      title: "把蛋白补充从一套流程缩短成开盖即饮",
      copy: "公开商品信息显示，迈胜把每瓶蛋白含量、多口味、即饮包装和15瓶周期组合成清晰产品。它卖的不是新的营养概念，而是省掉冲泡、携带和清洗。",
      proofLabel: "可复制动作",
      proof: "短视频只讲一个确定时刻和一个确定麻烦，不泛讲健康生活。",
      source: "https://maisheng.jd.com/view_search-4104882-28579008-99-1-20-1.html"
    },
    {
      stage: "信任 · 借专业人群",
      title: "先让最懂训练的人认可，再走向更广人群",
      copy: "迈胜公开复盘持续提到赛事、运动员、跑团和专业渠道。专业人群提供的不是一次曝光，而是对使用时刻、成分表达和产品便利性的共同背书。",
      proofLabel: "经营含义",
      proof: "早期预算优先购买真实使用和内容资产，不优先购买泛娱乐流量。",
      source: "https://m.eeo.com.cn/2026/0711/952870.shtml"
    },
    {
      stage: "内容 · 垂直解释",
      title: "让健身和营养创作者讲清小红瓶的使用理由",
      copy: "公开短视频样本可见“小红瓶、开盖即饮、健身懒人”等表达。它们只能证明内容角度存在，不能证明成交，但足以说明专业内容比纯促销更适合第一轮测试。",
      proofLabel: "验证边界",
      proof: "公开视频只做话术观察，销量必须由独立链接和退款后净订单验证。",
      source: "https://jingxuan.douyin.com/m/video/7670234223106859091"
    },
    {
      stage: "放大 · 独立链接",
      title: "用达人专属链接隔离人群、价格和内容效果",
      copy: "2025年健康产品公开榜单出现迈胜其他蛋白产品的达人专属链接和较高销售区间。这证明迈胜使用过达人链接放大的组织方式，但不能把该销量外推到本次15瓶蛋白饮。",
      proofLabel: "可复制动作",
      proof: "每个达人单独链接、单独核算、单独复盘，不能用全店GMV替代达人净贡献。",
      source: "https://pdf.dfcfw.com/pdf/H3_AP202508211731540272_1.pdf?1755772939000.pdf="
    },
    {
      stage: "扩圈 · 重做零售表达",
      title: "专业价值不变，面向大众重写产品语言",
      copy: "公开采访显示，迈胜进入山姆经历三次调整。第三次把表达拓宽为“运动活力蛋白饮”后，三周销售增长40%，女性用户超过男性。专业起盘和大众扩圈并不矛盾，顺序才是关键。",
      proofLabel: "经营含义",
      proof: "先在专业场景证明产品，再用更宽的日常活力语言扩圈，不能一开始就稀释定位。",
      source: "https://m.eeo.com.cn/2026/0711/952870.shtml"
    }
  ];

  const channelData = {
    "creator-live": {
      title: "拿新客、借信任、快速放量",
      copy: "让已经拥有健身、跑步、营养信任的达人，用独立链接验证“谁能卖、什么话术能卖”。首轮不追求大场，先用垂直小场找到稳定净订单。",
      actions: [
        "每个达人独立商品链接，隔离价格、内容和退货数据",
        "先纯佣或低固定费，首轮只给可回收的样品成本",
        "按退款后净订单复盘，不按曝光和支付峰值庆功"
      ],
      stop: "连续两场单箱贡献为正，且退款率、违规风险均在约定线内，才升级佣金或投流。"
    },
    "brand-live": {
      title: "承接解释、稳定转化、沉淀复购",
      copy: "品牌自播不与达人争夺同一种流量。它负责把成分、口味、使用时刻、物流和售后讲透，并承接达人看过但没有立即购买的人。",
      actions: [
        "固定20分钟循环，把场景、证明、演示、异议和行动讲完整",
        "每周至少4场稳定开播，用同一报表观察小时级单箱贡献",
        "达人爆发日增加承接时段，复用已经验证的达人话术"
      ],
      stop: "单场先达到变动成本为正，再要求覆盖主播、运营、场控和仓租水电。"
    },
    "creator-video": {
      title: "测试购买理由，给直播和商品卡供素材",
      copy: "短视频是低成本实验室。先验证“训练后、通勤、差旅”中哪个场景更能推动商品点击，再把胜出结构交给达人和自播。",
      actions: [
        "7天完成3类场景与4类开场的12条最小测试矩阵",
        "用商品点击到退款后支付选素材，不用播放量选素材",
        "回收达人授权素材，重剪开场和证据段，保持口径一致"
      ],
      stop: "只有前20%的点击到净支付结构进入下一轮，不给低转化高播放素材追加预算。"
    },
    "product-card": {
      title: "收搜索、收回访、收复购",
      copy: "商品卡不是被动货架。它要完整承接达人种下的品牌词、小红瓶、液体蛋白和运动后补充等搜索，同时让老客快速找到同一规格。",
      actions: [
        "标题、首图、规格、价格与直播口径完全一致",
        "把口味、含糖、储存、发货和适用场景集中做成FAQ",
        "达人独立链接用于归因，标准链接用于搜索和复购"
      ],
      stop: "商品卡投流必须独立核算搜索词和复购，不把达人自然回访误算为广告增量。"
    }
  };

  const inputs = {
    price: byId("price"),
    skuCost: byId("sku-cost"),
    orders: byId("orders"),
    refund: byId("refund"),
    platform: byId("platform"),
    tax: byId("tax"),
    commission: byId("commission"),
    serviceRate: byId("service-rate"),
    adRate: byId("ad-rate"),
    fulfillment: byId("fulfillment"),
    aftersales: byId("aftersales"),
    peopleCost: byId("people-cost"),
    facilityCost: byId("facility-cost"),
    otherFixed: byId("other-fixed"),
    placementFee: byId("placement-fee")
  };

  let activeScenario = "self-live";
  let activeCreatorSku = "regular-supported";

  const valueOf = (input) => Number.parseFloat(input.value) || 0;

  function syncMoneyPresets() {
    document.querySelectorAll("[data-money-target]").forEach((button) => {
      const input = byId(button.dataset.moneyTarget);
      const current = Number.parseFloat(input.value);
      const preset = Number.parseFloat(button.dataset.moneyValue);
      const active = Number.isFinite(current) && Math.abs(current - preset) < 0.005;
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function validateMoneyInputs() {
    const invalidInputs = [inputs.price, inputs.skuCost].filter((input) => {
      const value = Number.parseFloat(input.value);
      return !Number.isFinite(value) || value <= 0;
    });

    [inputs.price, inputs.skuCost].forEach((input) => {
      input.setAttribute("aria-invalid", invalidInputs.includes(input) ? "true" : "false");
    });

    const valid = invalidInputs.length === 0;
    byId("pnl-input-error").hidden = valid;
    byId("pnl-results").classList.toggle("model-invalid", !valid);
    return valid;
  }

  function readModel() {
    return Object.fromEntries(Object.entries(inputs).map(([key, input]) => [key, valueOf(input)]));
  }

  function calculate(data) {
    const refundRate = data.refund / 100;
    const feeRate = (data.platform + data.tax) / 100;
    const marketingRate = (data.commission + data.serviceRate + data.adRate) / 100;
    const netRevenue = data.price * (1 - refundRate);
    const fees = data.price * feeRate;
    const operations = data.fulfillment + data.aftersales;
    const marketing = data.price * marketingRate;
    const preMarketing = netRevenue - data.skuCost - fees - operations;
    const contribution = preMarketing - marketing;
    const contributionRate = contribution / data.price * 100;
    const preMarketingRate = preMarketing / data.price * 100;
    const fixed = data.peopleCost + data.facilityCost + data.otherFixed + data.placementFee;
    const monthlyProfit = contribution * data.orders - fixed;
    const breakEvenOrders = contribution > 0 ? Math.ceil(fixed / contribution) : Infinity;
    const breakEvenRoi = preMarketingRate > 0 ? 100 / preMarketingRate : Infinity;

    return {
      netRevenue,
      fees,
      operations,
      marketing,
      preMarketing,
      contribution,
      contributionRate,
      preMarketingRate,
      fixed,
      monthlyProfit,
      breakEvenOrders,
      breakEvenRoi
    };
  }

  function showToast(message) {
    const toast = byId("toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function setWidth(id, value, max) {
    const ratio = max > 0 ? Math.min(100, Math.max(1, value / max * 100)) : 1;
    byId(id).style.width = `${ratio}%`;
  }

  function updateOutputs() {
    byId("refund-output").textContent = `${valueOf(inputs.refund)}%`;
    byId("platform-output").textContent = `${valueOf(inputs.platform)}%`;
    byId("tax-output").textContent = `${valueOf(inputs.tax)}%`;
    byId("commission-output").textContent = `${valueOf(inputs.commission)}%`;
    byId("service-output").textContent = `${valueOf(inputs.serviceRate)}%`;
    byId("ad-output").textContent = `${valueOf(inputs.adRate)}%`;

    syncMoneyPresets();
    if (!validateMoneyInputs()) {
      byId("profit-verdict").className = "danger";
      byId("profit-verdict").textContent = "请先修正输入金额";
      return;
    }

    const data = readModel();
    const result = calculate(data);
    const label = modelDefaults[activeScenario].label;

    byId("scenario-label").textContent = `${label} · 可调情景`;
    byId("unit-contribution").textContent = money(result.contribution);
    byId("unit-margin").textContent = `贡献率 ${percent(result.contributionRate)}`;
    byId("monthly-profit").textContent = wholeMoney(result.monthlyProfit);
    byId("monthly-revenue").textContent = `退款后收入 ${wholeMoney(result.netRevenue * data.orders)}`;
    byId("break-even-orders").textContent = Number.isFinite(result.breakEvenOrders) ? `${result.breakEvenOrders.toLocaleString("zh-CN")}箱` : "无法保本";
    byId("break-even-daily").textContent = Number.isFinite(result.breakEvenOrders) ? `按26个经营日为${Math.ceil(result.breakEvenOrders / 26)}箱/天` : "当前每卖一箱都扩大亏损";
    byId("max-marketing-rate").textContent = percent(Math.max(0, result.preMarketingRate));
    byId("break-even-roi").textContent = Number.isFinite(result.breakEvenRoi) ? `合计营销费保本GMV ROI ${result.breakEvenRoi.toFixed(2)}` : "没有可用于营销的利润空间";

    const verdict = byId("profit-verdict");
    verdict.className = "";
    if (result.contribution <= 0) {
      verdict.textContent = "立即停止放量";
      verdict.classList.add("danger");
    } else if (result.monthlyProfit < 0) {
      verdict.textContent = "单箱为正，尚未覆盖固定成本";
      verdict.classList.add("warn");
    } else {
      verdict.textContent = "可以启动测试";
    }

    byId("wf-revenue-label").textContent = `+${money(result.netRevenue)}`;
    byId("wf-goods-label").textContent = `-${money(data.skuCost)}`;
    byId("wf-fees-label").textContent = `-${money(result.fees)}`;
    byId("wf-ops-label").textContent = `-${money(result.operations)}`;
    byId("wf-marketing-label").textContent = `-${money(result.marketing)}`;
    byId("wf-contribution-label").textContent = `${result.contribution >= 0 ? "+" : "-"}${money(Math.abs(result.contribution))}`;

    const chartMax = Math.max(result.netRevenue, 1);
    setWidth("wf-revenue", result.netRevenue, chartMax);
    setWidth("wf-goods", data.skuCost, chartMax);
    setWidth("wf-fees", result.fees, chartMax);
    setWidth("wf-ops", result.operations, chartMax);
    setWidth("wf-marketing", result.marketing, chartMax);
    setWidth("wf-contribution", Math.abs(result.contribution), chartMax);
    byId("wf-contribution").closest(".waterfall-row").classList.toggle("negative", result.contribution < 0);

    updateComparisons(data);
  }

  function updateComparisons(data) {
    const costs = {
      regular: 68.6667,
      cash: 103,
      custom: 88
    };

    Object.entries(costs).forEach(([key, cost]) => {
      const result = calculate({ ...data, skuCost: cost, commission: 0, serviceRate: 0, adRate: 0, peopleCost: 0, facilityCost: 0, otherFixed: 0, placementFee: 0 });
      byId(`compare-${key}`).textContent = `${money(result.preMarketing)} / ${percent(result.preMarketingRate)}`;
      const state = byId(`compare-${key}-state`);
      if (!state) return;
      if (result.preMarketingRate >= 30) state.textContent = "有空间";
      else if (result.preMarketingRate >= 18) state.textContent = "谨慎";
      else state.textContent = "收紧";
    });
  }

  function applyScenario(name) {
    activeScenario = name;
    const values = modelDefaults[name];
    Object.entries(inputs).forEach(([key, input]) => {
      if (Object.hasOwn(values, key)) input.value = values[key];
    });
    document.querySelectorAll(".scenario-tab").forEach((button) => {
      const active = button.dataset.scenario === name;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
    updateOutputs();
  }

  function updateHero(costKey) {
    const costMap = {
      "regular-supported": 68.6667,
      "regular-cash": 103,
      custom: 88
    };
    const data = {
      price: 159,
      skuCost: costMap[costKey],
      orders: 1,
      refund: 8,
      platform: 3,
      tax: 3,
      commission: 0,
      serviceRate: 0,
      adRate: 0,
      fulfillment: 8,
      aftersales: 2,
      peopleCost: 0,
      facilityCost: 0,
      otherFixed: 0,
      placementFee: 0
    };
    const result = calculate(data);
    const ops = result.fees + result.operations;

    byId("hero-pre-marketing").textContent = money(result.preMarketing);
    byId("hero-pre-rate").textContent = `占零售价 ${percent(result.preMarketingRate)}`;
    byId("hero-goods").textContent = money(data.skuCost);
    byId("hero-ops").textContent = money(ops);
    byId("hero-room").textContent = money(Math.max(0, result.preMarketing));

    const total = Math.max(data.skuCost + ops + Math.max(0, result.preMarketing), 1);
    byId("hero-bar-goods").style.width = `${data.skuCost / total * 100}%`;
    byId("hero-bar-ops").style.width = `${ops / total * 100}%`;
    byId("hero-bar-room").style.width = `${Math.max(0, result.preMarketing) / total * 100}%`;

    const alert = byId("hero-alert");
    alert.className = "alert-row";
    if (result.preMarketingRate >= 30) {
      alert.innerHTML = `<strong>可放量</strong><span>达人佣金与投流合计必须低于${percent(result.preMarketingRate)}，并给固定成本留余量。</span>`;
    } else if (result.preMarketingRate >= 18) {
      alert.classList.add("warn");
      alert.innerHTML = `<strong>利润敏感</strong><span>营销前空间只有${percent(result.preMarketingRate)}，优先自播、商品卡和低佣垂直达人。</span>`;
    } else {
      alert.classList.add("danger");
      alert.innerHTML = `<strong>不宜放量</strong><span>当前口径仅剩${percent(result.preMarketingRate)}，先等待补货兑现或收紧投流和佣金。</span>`;
    }

    document.querySelectorAll(".quick-sku").forEach((button) => button.classList.toggle("active", button.dataset.quickSku === costKey));
  }

  function updateCreatorTable(sku) {
    activeCreatorSku = sku;
    const price = 159;
    const cost = sku === "custom" ? 88 : 68.6667;
    const commissions = sku === "custom" ? [10, 12, 15, 15] : [15, 18, 20, 22];
    const base = calculate({
      price,
      skuCost: cost,
      orders: 1,
      refund: 8,
      platform: 3,
      tax: 3,
      commission: 0,
      serviceRate: 0,
      adRate: 0,
      fulfillment: 8,
      aftersales: 2,
      peopleCost: 0,
      facilityCost: 0,
      otherFixed: 0,
      placementFee: 0
    });

    document.querySelectorAll("[data-commission-tier]").forEach((node) => {
      const tier = Number(node.dataset.commissionTier);
      node.textContent = tier === 3 ? `${commissions[tier]}%封顶` : `${commissions[tier]}%`;
    });

    const waistAfterCommission = base.preMarketing - price * commissions[1] / 100;
    const shoulderAfterCommission = base.preMarketing - price * commissions[2] / 100;
    byId("seed-budget").textContent = money(cost * 50);
    byId("waist-fee-cap").textContent = wholeMoney(Math.max(0, waistAfterCommission * 300 * 0.3));
    byId("shoulder-fee-cap").textContent = wholeMoney(Math.max(0, shoulderAfterCommission * 600 * 0.3));

    document.querySelectorAll(".creator-sku").forEach((button) => button.classList.toggle("active", button.dataset.creatorSku === sku));
  }

  function setPath(index) {
    const data = pathData[index];
    byId("path-stage").textContent = data.stage;
    byId("path-detail-title").textContent = data.title;
    byId("path-detail-copy").textContent = data.copy;
    byId("path-proof-label").textContent = data.proofLabel;
    byId("path-proof-copy").textContent = data.proof;
    byId("path-source").href = data.source;
    document.querySelectorAll(".path-step").forEach((button) => {
      const active = Number(button.dataset.path) === index;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function setChannel(requestedKey) {
    const key = requestedKey === "brand-video" ? "creator-video" : requestedKey;
    const data = channelData[key];
    if (!data) return;
    byId("channel-job-title").textContent = data.title;
    byId("channel-job-copy").textContent = data.copy;
    byId("channel-stop-copy").textContent = data.stop;
    byId("channel-actions").replaceChildren(...data.actions.map((action) => {
      const li = document.createElement("li");
      li.textContent = action;
      return li;
    }));

    document.querySelectorAll(".channel-tab").forEach((button) => {
      const active = button.dataset.channel === key;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
    document.querySelectorAll(".mix-segment").forEach((button) => {
      const buttonKey = button.dataset.channel === "brand-video" ? "creator-video" : button.dataset.channel;
      button.classList.toggle("active", buttonKey === key);
    });
  }

  function updateChecklist() {
    const checks = [...document.querySelectorAll("#card-checklist input")];
    const done = checks.filter((input) => input.checked).length;
    byId("check-count").textContent = `${done} / ${checks.length}`;
  }

  function copySummary() {
    if (!validateMoneyInputs()) {
      showToast("请先填写有效的零售价和进货成本");
      return;
    }

    const data = readModel();
    const result = calculate(data);
    const summary = [
      `渠道：${modelDefaults[activeScenario].label}`,
      `零售价：${money(data.price, 0)}`,
      `进货成本：${money(data.skuCost)}`,
      `退款率：${data.refund}%`,
      `平台费率：${data.platform}%`,
      `税费率：${data.tax}%`,
      `达人佣金：${data.commission}%`,
      `团长/联盟附加费：${data.serviceRate}%`,
      `投流率：${data.adRate}%`,
      `单箱贡献：${money(result.contribution)}`,
      `月度经营结果：${wholeMoney(result.monthlyProfit)}`,
      `盈亏平衡订单：${Number.isFinite(result.breakEvenOrders) ? result.breakEvenOrders : "无法保本"}`,
      `口径：零售价、进货成本及各项费率均为可编辑内部测算参数。`
    ].join("\n");

    const fallback = () => {
      const textarea = document.createElement("textarea");
      textarea.value = summary;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      showToast("测算摘要已复制");
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(summary).then(() => showToast("测算摘要已复制"), fallback);
    } else {
      fallback();
    }
  }

  Object.values(inputs).forEach((input) => input.addEventListener("input", updateOutputs));

  document.querySelectorAll("[data-money-target]").forEach((button) => button.addEventListener("click", () => {
    byId(button.dataset.moneyTarget).value = button.dataset.moneyValue;
    updateOutputs();
  }));

  document.querySelectorAll(".scenario-tab").forEach((button) => button.addEventListener("click", () => applyScenario(button.dataset.scenario)));
  byId("reset-model").addEventListener("click", () => applyScenario(activeScenario));
  byId("copy-summary").addEventListener("click", copySummary);
  byId("print-page").addEventListener("click", () => window.print());

  document.querySelectorAll(".quick-sku").forEach((button) => button.addEventListener("click", () => updateHero(button.dataset.quickSku)));
  document.querySelectorAll(".creator-sku").forEach((button) => button.addEventListener("click", () => updateCreatorTable(button.dataset.creatorSku)));
  document.querySelectorAll(".path-step").forEach((button) => button.addEventListener("click", () => setPath(Number(button.dataset.path))));
  document.querySelectorAll(".channel-tab, .mix-segment").forEach((button) => button.addEventListener("click", () => setChannel(button.dataset.channel)));
  document.querySelectorAll("#card-checklist input").forEach((input) => input.addEventListener("change", updateChecklist));

  document.querySelectorAll("[data-open-dialog]").forEach((button) => {
    button.addEventListener("click", () => byId(button.dataset.openDialog).showModal());
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  document.querySelectorAll(".source-filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll(".source-filter-button").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".source-list article").forEach((article) => {
        article.classList.toggle("hidden", filter !== "all" && article.dataset.grade !== filter);
      });
    });
  });

  const navLinks = [...document.querySelectorAll(".section-nav a")];
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.25, 0.5] });

  ["path", "channel", "creator", "pnl", "plan"].forEach((id) => sectionObserver.observe(byId(id)));

  updateHero("regular-supported");
  updateCreatorTable(activeCreatorSku);
  applyScenario(activeScenario);
  updateChecklist();
  window.requestAnimationFrame(() => document.body.classList.add("ready"));
})();
