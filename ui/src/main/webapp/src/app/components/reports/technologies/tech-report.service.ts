import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {ProjectTechnologiesStatsModel} from "../../../generated/tsModels/ProjectTechnologiesStatsModel";
import {GraphService} from "../../../services/graph.service";

@Injectable()
export class TechReportService extends GraphService
{
    constructor(http: Http) {
        super(http);
    }

    getStats(execID: number): Observable<ProjectTechnologiesStatsModel[]>
    {
        return this.getTypeAsArray<ProjectTechnologiesStatsModel>(ProjectTechnologiesStatsModel.discriminator, execID, {
            depth: 2,
            includeInVertices: false
        });
    }
 }

export class StatsItem {
    key: string;
    quantity: number = 0;
    label: string;
}
