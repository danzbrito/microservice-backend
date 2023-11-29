import { PartialType } from '@nestjs/mapped-types';
import { CreateIssueReportDto } from './create-issue-report.dto';

export class UpdateIssueReportDto extends PartialType(CreateIssueReportDto) {}
