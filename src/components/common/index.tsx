import { ComponentRegistration } from 'json-react-layouts';
import { ContextService } from '../../services';
import { LabelAccessRightsComponent } from './LabelAccessRights';
import { LabelPublicationInfoComponent } from './LabelPublicationInfo';
import { LabelDateCreatedComponent } from './LabelDateCreated';
import { LabelSubjectsComponent } from './LabelSubjects';
import { LinkComponent } from './Link';
import { LinkRecordComponent } from './LinkRecord';
import { LabelComponent } from './SemanticElements';
import { TextShortenedComponent } from './TextShortened';

export * from './Link';
export * from './LinkRecord';
export * from './LabelAccessRights';
export * from './LabelDateCreated';
export * from './LabelPublicationInfo';
export * from './LabelSubjects';
export * from './Base';
export * from './SemanticElements';
export * from './TextShortened';

export type PropsWithUIConfig<P> = P & {
  /**
   * Callable accepting T context variables
   * and returning a composition definition
   */
  uiConfig: { [key: string]: any };
};

export const commonComponents: ComponentRegistration<
  string,
  any,
  ContextService
>[] = [
  LabelComponent,
  LabelAccessRightsComponent,
  LabelDateCreatedComponent,
  LabelPublicationInfoComponent,
  LabelSubjectsComponent,
  LinkComponent,
  LinkRecordComponent,
  TextShortenedComponent,
];
