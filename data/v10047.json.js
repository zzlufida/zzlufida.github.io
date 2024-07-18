window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10047","name":"BillTypeField","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW BillTypeField \r\nAS \r\n\r\nSELECT DISTINCT A.EnumName,A.EnumCode,E.cCaption,E.iColpos \r\nFROM AA_Enum A \r\nINNER JOIN VariationBillType B ON A.EnumCode=B.BillTypeName\r\nINNER JOIN VariationBillTable C ON B.BillTypeId=C.BillTypeId\r\nINNER JOIN AA_ColumnDic E ON C.ColSetKey=E.cKey\r\nWHERE A.EnumType='MO.BillType' \r\nAND A.LocaleId=dbo.UDF_GetLocaleID()\r\nAND C.ColSetKey IS NOT NULL","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BillTypeField"},{"field":"Type","value":"View"}],"columns":[{"id":"column-173295","object_id":"column-173295","name":"EnumName","name_without_path":"EnumName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173296","object_id":"column-173296","name":"EnumCode","name_without_path":"EnumCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173297","object_id":"column-173297","name":"cCaption","name_without_path":"cCaption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173298","object_id":"column-173298","name":"iColpos","name_without_path":"iColpos","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};