window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10589","name":"EQ_QEQDataDel","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View EQ_QEQDataDel as \r\nselect cEQCode From EQ_ChangeDetail union\r\nselect cObj as cEQCode From EQ_PointDef Where intObjType=2 union\r\nselect cObj as cEQCode From EQ_WorkContent Where intObjType=2 union\r\nselect cObj as cEQCode From EQ_WorkPlan Where intObjType=2 union\r\nselect cObj as cEQCode From EQ_Work Where intObjType=2 union\r\nselect cEQCode From EQ_TroubleDetail union\r\nselect cEQCode From EQ_EQData Where autoid in(select EQId From sfc_moroutingshift) union\r\nselect cEQCode From EQ_EQData Where autoid in(select EQId From sfc_workhrnotedetail) union\r\nselect cObj as cEQCode From EQ_RunDetail Where intObjType=2","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EQ_QEQDataDel"},{"field":"Type","value":"View"}],"columns":[{"id":"column-196613","object_id":"column-196613","name":"cEQCode","name_without_path":"cEQCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};