window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10158","name":"caq_zlfrelall","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view caq_zlfrelall\r\nas\r\n\tselect * from caq_zlfrel\r\n\tunion all\r\n\tselect distinct zid,zbatch,zid,zbatch,1 from caq_zlfrel","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"caq_zlfrelall"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174716","object_id":"column-174716","name":"zid","name_without_path":"zid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174717","object_id":"column-174717","name":"zbatch","name_without_path":"zbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174718","object_id":"column-174718","name":"oid","name_without_path":"oid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174719","object_id":"column-174719","name":"obatch","name_without_path":"obatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174720","object_id":"column-174720","name":"oflag","name_without_path":"oflag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};