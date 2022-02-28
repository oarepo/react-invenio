import React, { FC } from 'react';
import { Item, Label } from 'semantic-ui-react';
import _get from 'lodash/get';
import _truncate from 'lodash/truncate';

/**
 * Search result item metadata
 */
interface ResultItemMetadata {
  /**
   * Primary record identifier of a search result item.
   * */
  id: string;
  /**
   * Record metadata serialized for UI rendering.
   */
  ui?: { [key: string]: string };
}

export interface ResultItemProps {
  /**
   * Metadata of the search result item.
   */
  result: ResultItemMetadata;
  /**
   * Index of the item in a search result list.
   */
  index: number;
  /**
   *
   */
}

/**
 * An item of a record search result list.
 */
export const SearchResultItem: FC<ResultItemProps> = ({ result, index }) => {
  const accessStatusClass = _get(result, 'ui.access_status.id', 'open');
  const accessStatus = _get(result, 'ui.access_status.title_l10n', 'Open');
  const accessStatusIcon = _get(result, 'ui.access_status.icon', 'unlock');
  const createdDate = _get(
    result,
    'ui.created_date_l10n_long',
    'No creation date found.'
  );
  // const creators = result.ui.creators.creators.slice(0, 3)

  const descriptionStripped = _get(
    result,
    'ui.description_stripped',
    'No description'
  );

  const publicationDate = _get(
    result,
    'ui.publication_date_l10n_long',
    'No publication date found.'
  );
  const resourceType = _get(
    result,
    'ui.resource_type.title_l10n',
    'No resource type'
  );
  const subjects = _get(result, 'ui.subjects', []);
  const title = _get(result, 'metadata.title', 'No title');
  const version = _get(result, 'ui.version', null);

  // Derivatives
  const viewLink = `/records/${result.id}`;
  return (
    <Item key={index}>
      <Item.Content>
        <Item.Extra className="labels-actions">
          <Label size="tiny" color="blue">
            {publicationDate} ({version})
          </Label>
          <Label size="tiny" color="grey">
            {resourceType}
          </Label>
          <Label size="tiny" className={`access-status ${accessStatusClass}`}>
            {accessStatusIcon && <i className={`icon ${accessStatusIcon}`} />}
            {accessStatus}
          </Label>
        </Item.Extra>
        <Item.Header as="h2">
          <a href={viewLink}>{title}</a>
        </Item.Header>
        <Item.Meta className="creatibutors" />
        <Item.Description>
          {_truncate(descriptionStripped, { length: 350 })}
        </Item.Description>
        <Item.Extra>
          {subjects.map((subject: any, index: any) => (
            <Label key={index} size="tiny">
              {subject.title_l10n}
            </Label>
          ))}
          {createdDate && (
            <div>
              <small>
                Uploaded on <span>{createdDate}</span>
              </small>
            </div>
          )}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};
