"use client";

const DAYS = [
  { key: "monday", label: "Pazartesi" },
  { key: "tuesday", label: "Salı" },
  { key: "wednesday", label: "Çarşamba" },
  { key: "thursday", label: "Perşembe" },
  { key: "friday", label: "Cuma" },
  { key: "saturday", label: "Cumartesi" },
  { key: "sunday", label: "Pazar" },
];

export default function StepEight({ data, updateData, onNext, onPrev }) {
  const workingHours = data.working_hours || {};

  const handleToggleDay = (day) => {
    const newHours = {
      ...workingHours,
      [day]: {
        ...workingHours[day],
        enabled: !workingHours[day]?.enabled,
      }
    };
    updateData({ working_hours: newHours });
  };

  const handleTimeChange = (day, field, value) => {
    const newHours = {
      ...workingHours,
      [day]: {
        ...workingHours[day],
        [field]: value,
      }
    };
    updateData({ working_hours: newHours });
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="w-full max-w-[800px] rounded-xl border border-border-light dark:border-border-dark bg-content-light dark:bg-content-dark p-6 shadow-sm md:p-8 mx-auto">
      {/* Page Heading */}
      <div className="mb-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-black tracking-tight text-text-primary-light dark:text-text-primary-dark md:text-4xl">
            Çalışma Saatleri
          </h1>
          <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
            Müşterilerin açık olduğunuz zamanları bilmesini sağlayın. Bunu daha sonra ayarlarınızdan değiştirebilirsiniz.
          </p>
        </div>
      </div>

      {/* Working Hours Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {DAYS.map(({ key, label }) => {
          const dayData = workingHours[key] || { enabled: true, open: "09:00", close: "17:00" };
          
          return (
            <div key={key} className="rounded-lg border border-border-light dark:border-border-dark p-4">
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-text-primary-light dark:text-text-primary-dark">
                  {label}
                </p>
                <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-background-light dark:bg-background-dark p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary">
                  <div className="h-full w-[27px] rounded-full bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.15),0px_3px_1px_rgba(0,0,0,0.06)]"></div>
                  <input
                    type="checkbox"
                    checked={dayData.enabled}
                    onChange={() => handleToggleDay(key)}
                    className="invisible absolute"
                  />
                </label>
              </div>

              {dayData.enabled ? (
                <div className="mt-4 flex flex-wrap items-end gap-4">
                  <label className="flex flex-1 flex-col min-w-[120px]">
                    <p className="pb-2 text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                      Açılış
                    </p>
                    <input
                      type="time"
                      value={dayData.open}
                      onChange={(e) => handleTimeChange(key, "open", e.target.value)}
                      className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-border-light bg-content-light p-4 text-base text-text-primary-light placeholder:text-text-secondary-light focus:border-border-light focus:outline-none focus:ring-0 dark:border-border-dark dark:bg-content-dark dark:text-text-primary-dark dark:placeholder:text-text-secondary-dark"
                    />
                  </label>
                  <label className="flex flex-1 flex-col min-w-[120px]">
                    <p className="pb-2 text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                      Kapanış
                    </p>
                    <input
                      type="time"
                      value={dayData.close}
                      onChange={(e) => handleTimeChange(key, "close", e.target.value)}
                      className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-border-light bg-content-light p-4 text-base text-text-primary-light placeholder:text-text-secondary-light focus:border-border-light focus:outline-none focus:ring-0 dark:border-border-dark dark:bg-content-dark dark:text-text-primary-dark dark:placeholder:text-text-secondary-dark"
                    />
                  </label>
                </div>
              ) : (
                <div className="mt-4 flex h-14 items-center">
                  <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
                    Tüm gün kapalı
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Helper Text */}
      <div className="mt-6 text-center">
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          İpucu: Her gün için kapanış saatinizin açılış saatinizden sonra olduğundan emin olun.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex flex-col-reverse justify-end gap-4 sm:flex-row">
        <button
          type="button"
          onClick={onPrev}
          className="flex h-12 items-center justify-center rounded-lg border border-border-light px-6 text-base font-medium text-text-primary-light transition-colors hover:bg-background-light dark:border-border-dark dark:text-text-primary-dark dark:hover:bg-background-dark"
        >
          Önceki
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-white transition-colors hover:bg-primary/90"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
}

