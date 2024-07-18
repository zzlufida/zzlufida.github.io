window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6581","name":"HR_TM_WorkCalendar","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_TM_WorkCalendar"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-81462","object_id":"column-81462","name":"uPK","name_without_path":"uPK","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81463","object_id":"column-81463","name":"cDept_num","name_without_path":"cDept_num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81464","object_id":"column-81464","name":"dDate","name_without_path":"dDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81465","object_id":"column-81465","name":"rDateProperty","name_without_path":"rDateProperty","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81466","object_id":"column-81466","name":"bRoot","name_without_path":"bRoot","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81467","object_id":"column-81467","name":"bReadOnly","name_without_path":"bReadOnly","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_HR_TM_WorkCalendar","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uPK","name":"uPK"}],"custom_fields":{}},{"name":"IX_HR_TM_WorkCalendar","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cDept_num","name":"cDept_num"},{"path":null,"name_without_path":"dDate","name":"dDate"},{"path":null,"name_without_path":"bRoot","name":"bRoot"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};