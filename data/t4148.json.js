window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4148","name":"bom_extbomdata","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"bom_extbomdata"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-41467","object_id":"column-41467","name":"ParentId","name_without_path":"ParentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41468","object_id":"column-41468","name":"Version","name_without_path":"Version","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41469","object_id":"column-41469","name":"VersionDesc","name_without_path":"VersionDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41470","object_id":"column-41470","name":"VersionEffDate","name_without_path":"VersionEffDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41471","object_id":"column-41471","name":"ParentScrap","name_without_path":"ParentScrap","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_Rate: decimal","data_length":"6, 3","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_Rate\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41472","object_id":"column-41472","name":"ModifyUser","name_without_path":"ModifyUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41473","object_id":"column-41473","name":"ErrorFlag","name_without_path":"ErrorFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41474","object_id":"column-41474","name":"OldBomId","name_without_path":"OldBomId","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-41475","object_id":"column-41475","name":"AutoId","name_without_path":"AutoId","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};