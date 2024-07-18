window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12153","name":"Rpt_FldDEF","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--yqf 07-06-04 报表数据权限控制\r\n\r\nCREATE VIEW [dbo].[Rpt_FldDEF]\r\nAS\r\nSELECT     ID, Name, Expression, Condition, ModeEx, OrderEx, TopEx, LeftEx, Width, Height, Visible, Note, nameForeign, iColSize, FormatEx, iAlignStyle, iSize, \r\n                      bAuth\r\nFROM         dbo.Rpt_FldDEF_Base\r\nWHERE     (LocaleID = dbo.UDF_GetLocaleID())","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Rpt_FldDEF"},{"field":"Type","value":"View"}],"columns":[{"id":"column-281761","object_id":"column-281761","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281762","object_id":"column-281762","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281763","object_id":"column-281763","name":"Expression","name_without_path":"Expression","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281764","object_id":"column-281764","name":"Condition","name_without_path":"Condition","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281765","object_id":"column-281765","name":"ModeEx","name_without_path":"ModeEx","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281766","object_id":"column-281766","name":"OrderEx","name_without_path":"OrderEx","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281767","object_id":"column-281767","name":"TopEx","name_without_path":"TopEx","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281768","object_id":"column-281768","name":"LeftEx","name_without_path":"LeftEx","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281769","object_id":"column-281769","name":"Width","name_without_path":"Width","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281770","object_id":"column-281770","name":"Height","name_without_path":"Height","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281771","object_id":"column-281771","name":"Visible","name_without_path":"Visible","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281772","object_id":"column-281772","name":"Note","name_without_path":"Note","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281773","object_id":"column-281773","name":"nameForeign","name_without_path":"nameForeign","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281774","object_id":"column-281774","name":"iColSize","name_without_path":"iColSize","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281775","object_id":"column-281775","name":"FormatEx","name_without_path":"FormatEx","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281776","object_id":"column-281776","name":"iAlignStyle","name_without_path":"iAlignStyle","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281777","object_id":"column-281777","name":"iSize","name_without_path":"iSize","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281778","object_id":"column-281778","name":"bAuth","name_without_path":"bAuth","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[{"name":"TR_Rpt_FldDEF_InsteadofDelete","description":null,"action":"Instead Of Delete ","custom_fields":{}},{"name":"TR_Rpt_fldDEF_InsteadofInsert","description":null,"action":"Instead Of Insert ","custom_fields":{}}],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};