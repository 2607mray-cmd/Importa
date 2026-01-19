export interface BlendRow {
    id: string;
    gardenName: string;
    gradeName: string;
    numberOfBags: number;
    weightPerBag: number;
    extraKgs: number[];
    ratePerKg: number;
}

export type Currency = '₹' | '$' | '£';

export interface BlendSettings {
    currency: Currency;
    wastagePercent: number;
    targetPricePerKg: number;
    blendName: string;
    batchNumber: string;
    roundToDecimals: number;
}

export interface BlendSummary {
    totalQuantityKg: number;
    totalCost: number;
    avgCostPerKg: number;
    numberOfGardens: number;
    numberOfGrades: number;
}

export interface GradeBreakdown {
    gradeName: string;
    totalKg: number;
    percentage: number;
    totalValue: number;
    costContribution: number;
}

export interface GardenBreakdown {
    gardenName: string;
    totalKg: number;
    percentage: number;
    totalValue: number;
    costContribution: number;
}
