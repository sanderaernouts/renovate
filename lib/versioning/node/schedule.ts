import dataFiles from '../../data-files.generated';

interface NodeJsSchedule {
  lts?: string;
  maintenance?: string;
  end: string;
  start: string;
  codename?: string;
}

export type NodeJsData = Record<string, NodeJsSchedule>;

export const nodeSchedule: NodeJsData = JSON.parse(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  dataFiles.get('data/node-js-schedule.json')!
);
