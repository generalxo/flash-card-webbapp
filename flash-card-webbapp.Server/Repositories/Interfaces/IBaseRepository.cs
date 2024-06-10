using System.Linq.Expressions;

namespace flash_card_webbapp.Server.Repositories.Interfaces
{
    public interface IBaseRepository<T>
    {
        Task<IQueryable<T>> GetAllAsync();
        Task<IQueryable<T>> GetByConditionAsync(Expression<Func<T, bool>> expression);
        Task<T?> GetById(Guid id);
        Task CreateAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task<int> SaveAsync();
    }
}
