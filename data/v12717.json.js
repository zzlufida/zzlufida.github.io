window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12717","name":"v_CJTM_ReferData_DutyClass_MM","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW v_CJTM_ReferData_DutyClass_MM\r\nAS\r\n\r\nSELECT cCode as 班组编码,vName as 班组名称 FROM Team with(nolock)where 1=1 and bMOTeam = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_CJTM_ReferData_DutyClass_MM"},{"field":"Type","value":"View"}],"columns":[{"id":"column-317907","object_id":"column-317907","name":"班组编码","name_without_path":"班组编码","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-317908","object_id":"column-317908","name":"班组名称","name_without_path":"班组名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};