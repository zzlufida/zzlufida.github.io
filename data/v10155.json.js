window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10155","name":"caq_zfrelall","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view caq_zfrelall\r\nas\r\n\tselect * from caq_zfrel\r\n\tunion all\r\n\tselect distinct zid,zbatch,zid,zbatch,zinvcode,zinvcode,zbasecoid,zbasecoid  from caq_zfrel","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"caq_zfrelall"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174701","object_id":"column-174701","name":"zid","name_without_path":"zid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174702","object_id":"column-174702","name":"zbatch","name_without_path":"zbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174703","object_id":"column-174703","name":"fid","name_without_path":"fid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174704","object_id":"column-174704","name":"fbatch","name_without_path":"fbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174705","object_id":"column-174705","name":"invcode","name_without_path":"invcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174706","object_id":"column-174706","name":"zinvcode","name_without_path":"zinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174707","object_id":"column-174707","name":"ibasecoid","name_without_path":"ibasecoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174708","object_id":"column-174708","name":"zbasecoid","name_without_path":"zbasecoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};