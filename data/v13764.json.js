window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13764","name":"v_opcontrol","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_opcontrol\r\nas\r\nselect ByOpTransform = OpControl & 2,\r\n\t\t ByReport = OpControl & 1,\r\n\t\t ByProcessFlow = OpControl & 4\r\nfrom mom_parameter","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_opcontrol"},{"field":"Type","value":"View"}],"columns":[{"id":"column-397938","object_id":"column-397938","name":"ByOpTransform","name_without_path":"ByOpTransform","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397939","object_id":"column-397939","name":"ByReport","name_without_path":"ByReport","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397940","object_id":"column-397940","name":"ByProcessFlow","name_without_path":"ByProcessFlow","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};