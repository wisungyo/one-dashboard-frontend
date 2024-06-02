"use client";
import { useTambahBarangHooks } from "@/hooks/pageHooks/useTambahBarangHooks";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Loader2 from "@/components/common/Loader2";
import ConfirmationModal from "@/components/Modal/ConfirmationModal";

const TambahBarang = () => {
  const {
    name,
    code,
    image,
    price,
    loading,
    category,
    quantity,
    categories,
    description,
    isModalOpen,
    modalMessage,
    setName,
    setImage,
    setCode,
    setPrice,
    showModal,
    hideModal,
    setQuantity,
    setCategory,
    setDescription,
    setModalMessage,
    handleCreateProduct,
  } = useTambahBarangHooks();

  if (loading) {
    return <Loader2 />;
  }

  return (
    <>
      <Breadcrumb pageName="Tambah Barang" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Tambah Barang
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Nama Barang
                </label>
                <input
                  type="text"
                  value={name}
                  placeholder="Masukkan Nama Barang"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <SelectGroupOne
                title="Kategori"
                onChange={setCategory}
                data={categories}
                defaultValue={category || "-1"}
              />

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Kode Barang
                </label>
                <input
                  type="text"
                  value={code}
                  placeholder="Masukkan Kode Barang"
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Harga
                  </label>
                  <input
                    type="number"
                    value={price}
                    placeholder="Masukkan Harga Barang"
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Kuantitas
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    placeholder="Masukkan Kuantitas Barang"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    style={{
                      appearance: "textfield", // For Edge
                      MozAppearance: "textfield", // For Firefox
                      WebkitAppearance: "none", // For Chrome, Safari, etc.
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Deskripsi
                </label>
                <textarea
                  rows={6}
                  value={description}
                  placeholder="Masukkan Deskripsi Barang"
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <button
                className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                onClick={handleCreateProduct}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- File upload --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Foto Barang
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Lampirkan Foto
                </label>
                <input
                  type="file"
                  className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                  accept="image/*"
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    setImage(file);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <ConfirmationModal message={modalMessage} onConfirm={hideModal} />
        )}
      </div>
    </>
  );
};

export default TambahBarang;
