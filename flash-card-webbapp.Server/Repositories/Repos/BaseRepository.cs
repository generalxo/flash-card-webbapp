using flash_card_webbapp.Server.Data;
using flash_card_webbapp.Server.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace flash_card_webbapp.Server.Repositories.Repos
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public BaseRepository(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public async Task<IQueryable<T>> GetAllAsync()
        {
            var result = await _applicationDbContext.Set<T>().AsNoTracking().ToListAsync();
            return result.AsQueryable();
        }

        public async Task<IQueryable<T>> GetByConditionAsync(Expression<Func<T, bool>> expression)
        {
            var result = await _applicationDbContext.Set<T>().Where(expression).ToListAsync();
            return result.AsQueryable();
        }

        public async Task CreateAsync(T entity)
        {
            await _applicationDbContext.Set<T>().AddAsync(entity);
        }

        public void Update(T entity)
        {
            _applicationDbContext.Set<T>().Update(entity);
        }

        public void Delete(T entity)
        {
            _applicationDbContext.Set<T>().Remove(entity);
        }

        public async Task SaveAsync()
        {
            await _applicationDbContext.SaveChangesAsync();
        }
    }
}
