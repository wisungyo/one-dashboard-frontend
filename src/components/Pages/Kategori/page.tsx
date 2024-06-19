"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Loader2 from "@/components/common/Loader2";
import { useKategoriHooks } from "@/hooks/pageHooks/useKategoriHooks";
import ConfirmationModal from "@/components/Modal/ConfirmationModal";

const Kategori: React.FC = () => {
  const {
    name,
    loading,
    action,
    setAction,
    setName,
    setMessage,
    isUpdate,
    productId,
    message,
    showModal,
    categories,
    description,
    setProductId,
    setDescription,
    handlePrepareCreation,
    handleCreateCategory,
    handleDeleteCategory,
    handleUpdateCategory,
    handleShowModal,
    handleHideModal,
    handleSetUpdate,
    handleCancel,
  } = useKategoriHooks();

  return (
    <>
      {loading ? (
        <Loader2 />
      ) : (
        <>
          <Breadcrumb pageName="Kategori" />

          <div className="rounded border border-stroke bg-white p-6 py-8 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row justify-end">
                <button
                  className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                  type="button"
                  onClick={() =>
                    action === "create"
                      ? handleCreateCategory()
                      : handlePrepareCreation()
                  }
                >
                  {action === "create" ? "Simpan" : "Tambah"} Kategori
                </button>
              </div>

              {action === "create" ? (
                <div className="flex flex-col justify-start rounded-md border border-stroke p-4">
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    Nama
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan Nama Barang"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <label className="mb-2 mt-2 block text-sm font-medium text-black dark:text-white">
                    Deskripsi
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan Deskripsi Barang"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex flex-col justify-start rounded-md border border-stroke p-4"
                  >
                    <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                      Nama
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Nama Barang"
                      value={productId === category.id ? name : category.name}
                      disabled={productId !== category.id}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <label className="mb-2 mt-2 block text-sm font-medium text-black dark:text-white">
                      Deskripsi
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Nama Barang"
                      value={
                        productId === category.id
                          ? description
                          : category.description
                      }
                      disabled={productId !== category.id}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    {isUpdate ? (
                      <div
                        className={`mt-4 flex flex-row justify-end gap-4 ${productId !== category.id ? "opacity-0" : ""}`}
                      >
                        <button
                          onClick={handleCancel}
                          disabled={productId !== category.id}
                        >
                          Batal
                        </button>
                        <button
                          onClick={() => {
                            setMessage(
                              "Apakah anda yakin ingin menyimpan perubahan ini?",
                            );
                            handleShowModal();
                          }}
                          disabled={productId !== category.id}
                        >
                          Simpan
                        </button>
                      </div>
                    ) : (
                      <div className="mt-4 flex flex-row justify-end gap-4">
                        <button
                          onClick={() => {
                            setAction("delete");
                            setMessage(
                              "Apakah anda yakin ingin menghapus kategori ini?",
                            );
                            handleShowModal();
                            setProductId(category.id);
                          }}
                        >
                          Hapus
                        </button>
                        <button
                          onClick={() => {
                            handleSetUpdate(category);
                            setAction("update");
                          }}
                        >
                          Ubah
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : null}

              {showModal && (
                <ConfirmationModal
                  message={message}
                  onCancel={handleHideModal}
                  onConfirm={
                    action === "update"
                      ? () => handleUpdateCategory()
                      : action === "delete"
                        ? () => handleDeleteCategory()
                        : () => {}
                  }
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Kategori;
