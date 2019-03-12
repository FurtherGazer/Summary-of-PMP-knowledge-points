var Metrics = /** @class */ (function () {
    function Metrics(name, abbr, definition, useage, computeFormula, measure) {
        this.name = name;
        this.abbr = abbr;
        this.definition = definition;
        this.useage = useage;
        this.computeFormula = computeFormula;
        this.measure = measure;
    }
    return Metrics;
}());
var plannedValue = new Metrics('计划价值', 'PV', '为计划工作分配的经批准的预算', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var EarnedValue = new Metrics('挣值', 'EV', '对已完成工作的测量，用该工作的批准预算来表示', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', function () {
    return 'EV = 已完成工作的计划价值之和';
}, null);
var ActualCost = new Metrics('实际成本', 'AC', '在给定时段内，执行某活动而实际发生的成本', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var BudgetAtCompletion = new Metrics('完工预算', 'BAC', '为将要执行的工作所建立的全部预算的总和', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var CostVariance = new Metrics('成本偏差', 'CV', '在某个给定时间点，预算亏空或盈余量，标识为挣值与实际成本之差', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var ScheduleVariance = new Metrics('进度偏差', 'SV', '测量进度绩效的一种指标，表示为挣值与计划价值之差', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var VarianceAtCompletion = new Metrics('完工偏差', 'VAC', '对预算亏空量或盈余量的一种预测，是完工预算与完工估算之差', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var CostPerformanceIndex = new Metrics('成本绩效指数', 'CPI', '测量预算资源的成本效率的一种指标，表示为挣值与实际成本之比', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var SchedulePerformanceIndex = new Metrics('进度绩效指数', 'SPI', '测量进度效率的一种指标，表示为挣值与计划价值之比', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var EstimateAtCompletion = new Metrics('完工估算', 'EAC', '完成所有工作所需的预期总成本，等于截至目前的事件成本加上完工所需估算', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var EstimateToComplete = new Metrics('完工尚需估算', 'ETC', '完成所有剩余项目工作的预计成本', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
var ToCompletePerformanceIndex = new Metrics('完工尚需绩效指数', 'TCPI', '为了实现特定的管理目标，剩余资源的使用必须达到的成本绩效指标，是完成剩余工作所需成本与剩余预算之比', '某时间点（通常为数据日期或项目完成日期）计划完成的工作的价值', null, null);
