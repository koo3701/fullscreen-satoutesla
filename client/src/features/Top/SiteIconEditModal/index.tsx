import { useContext } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/Elements/Button';
import { Modal } from '@/components/Elements/Modal';
import { ModalActions } from '@/components/Elements/Modal/ModalActions';
import { ModalContents } from '@/components/Elements/Modal/ModalContents';
import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';
import { TextField } from '@/components/Form/TextField';

import { useChangeIcon } from '@/features/Top/hooks/useChangeIcon';
import { useSite } from '@/features/Top/hooks/useSite';
import { SiteListContext } from '@/features/Top/SiteListContext';

/**
 * @package
 */
export type SiteIconEditModalPropsType = {
  className?: string;
  siteId?: string | number;
  isOpen: boolean;
  onClose: () => void;
};
/**
 * @package
 */
export const SiteIconEditModal = ({
  className,
  siteId,
  isOpen,
  onClose,
}: SiteIconEditModalPropsType) => {
  const [sites, setSites] = useContext(SiteListContext);
  const site = useSite(siteId);

  const [title, setTitle, handleChangeTitle, url, setUrl, handleChangeUrl] = useChangeIcon(
    site?.title,
    site?.url
  );

  const handleClose = () => {
    setTitle(site?.title ?? '');
    setUrl(site?.url ?? '');
    onClose();
  };

  const handleCancel = () => {
    onClose();
    setTitle(site?.title ?? '');
    setUrl(site?.url ?? '');
  };

  const handleSave = () => {
    if (site !== undefined) {
      setSites(sites.map((s) => (s.id === site.id ? { ...s, title, url } : s)));
    } else {
      setSites([...sites, { id: uuidv4(), url, title, order: sites.length }]);
    }

    onClose();
  };

  const handleDelete = () => {
    if (setSites) setSites(sites.filter((s) => s.id !== siteId));
    onClose();
  };

  return (
    <Modal className={className} isOpen={isOpen} onClose={handleClose}>
      <ModalTitle>{site !== undefined ? 'Edit' : 'Add'}</ModalTitle>
      <ModalContents className="flex flex-col items-center justify-center gap-2">
        <img
          className="w-32"
          src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
            site !== undefined ? site.url : url
          )}&size=128`}
          alt={site !== undefined ? site.title : title}
        />
        <TextField
          className="w-full"
          label="URL"
          type="text"
          placeholder="https://www.tesla.com/"
          value={url}
          onChange={handleChangeUrl}
        />
        <TextField
          className="w-full"
          label="Name"
          type="text"
          placeholder="Tesla"
          value={title}
          onChange={handleChangeTitle}
        />
      </ModalContents>
      <ModalActions className="flex justify-between">
        <div>
          {site !== undefined ? (
            <Button className="mr-auto" color="danger" onClick={handleDelete}>
              Delete
            </Button>
          ) : null}
        </div>
        <div className="flex gap-1">
          <Button color="primary" onClick={handleSave}>
            {site !== undefined ? 'Save' : 'Add'}
          </Button>
          <Button color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </ModalActions>
    </Modal>
  );
};
