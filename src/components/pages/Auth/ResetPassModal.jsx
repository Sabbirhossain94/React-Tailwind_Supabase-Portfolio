import { Modal } from 'antd';

function ResetPassModal({ isModalOpen, handleOk, handleCancel, formData, setFormData }) {
    return (
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} zIndex={3000}>
            <h2 className="text-lg font-semibold">Forgot your password?</h2>
            <p className='text-gray-900 text-md mt-2'>Enter your email address to get password reset link</p>
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block text-md font-medium text-slate-900"
                >
                    Email address
                </label>
                <input
                    required
                    id="email"
                    className="mt-2 block w-full dark:text-gray-400 appearance-none bg-zinc-100 dark:bg-slate-500/20 dark:border-gray-200/20 px-3 py-2 placeholder:text-zinc-500 dark:placeholder:text-gray-500 shadow-sm sm:text-sm rounded-md"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>
        </Modal>
    )
}

export default ResetPassModal