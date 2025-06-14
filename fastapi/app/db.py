from sqlmodel import SQLModel, Field, create_engine, Session
from typing import *

class DataChat(SQLModel, table=True):
    id: Optional[int] = Field(primary_key=True, index=True)
    prompt: str 
    result: str

rel_db_path = "./db.sqlite3"
file_path_sqlite = f"sqlite:///{rel_db_path}"
engine = create_engine(file_path_sqlite)

def create_table():
    SQLModel.metadata.create_all(bind=engine) 

# nhung lan giao dich -> co chap nhan thay doi hay khong
# -> phai dua vao ben trong Session
def get_session():
    # hoi session da dc su dung chua
    with Session(engine) as session: 
        # yield: co gia tri, return nhung ko ket thuc
        yield session



from fastapi import Depends
# Depends: Tự động gọi get_session() và inject vào route
# Annotated[Session, Depends(...)]: Kết hợp kiểu Session và cách lấy giá trị (via dependency)
# SessionDeps: Alias để tái sử dụng dễ dàng

SessionDeps = Annotated[Session, Depends(get_session)]

