window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10483","name":"EAStreaming","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.EAStreaming\r\nAS\r\nSELECT EAO_ID, EAO_Code,status\r\nFROM dbo.EA_Stream\r\nWHERE  status in( '11','12')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EAStreaming"},{"field":"Type","value":"View"}],"columns":[{"id":"column-190955","object_id":"column-190955","name":"EAO_ID","name_without_path":"EAO_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190956","object_id":"column-190956","name":"EAO_Code","name_without_path":"EAO_Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190957","object_id":"column-190957","name":"status","name_without_path":"status","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};