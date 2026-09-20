import type { ProjectEntry } from '../types/project'

import sgpClipperData from './projects/sgp-clipper.json'
import typhoonBeaconData from './projects/typhoon-beacon.json'
import kneeDetectionData from './projects/knee-detection.json'
import aiDirectorData from './projects/ai-director.json'
import monitoredQuizData from './projects/monitored-quiz.json'
import bodyMicrogamesData from './projects/body-microgames.json'
import waterManagementData from './projects/water-management.json'
import pageShutterData from './projects/pageshutter.json'
import trestleData from './projects/trestle.json'
import waterManagementV1Data from './projects/water-management-v1.json'

/** Projects shown on the archive page, in display order. */
export const archiveProjects: ProjectEntry[] = [
  sgpClipperData,
  typhoonBeaconData,
  kneeDetectionData,
  aiDirectorData,
  monitoredQuizData,
  bodyMicrogamesData,
  waterManagementData,
  pageShutterData,
  trestleData,
  waterManagementV1Data,
]
