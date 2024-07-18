window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11903","name":"PU_V_GetUnitID","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view PU_V_GetUnitID\r\nas \r\n\t select TmpUnitID.cInvCode,TmpUnitID.iGroupType,TmpUnitID.cUnitID,TmpChangRate.iChangRate from   \r\n\t (select cInvCode,iGroupType,\r\n\t (case iGroupType   \r\n\t when 0 then null   \r\n\t when 1 then (case isnull(cPUComUnitCode,'') when '' then (select top 1 cComUnitCode from ComputationUnit where cGroupCode=inventory.cGroupCode and bMainUnit=0) else cPUComUnitCode end)   \r\n\t when 2 then cAssComUnitCode end) as cUnitID  \r\n\t from inventory) as TmpUnitID  \r\n\t LEFT join   \r\n\t (select cComUnitCode as cUnitID,iChangRate from ComputationUnit) as TmpChangRate  \r\n\t on TmpUnitID.cUnitID=TmpChangRate.cUnitID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PU_V_GetUnitID"},{"field":"Type","value":"View"}],"columns":[{"id":"column-259603","object_id":"column-259603","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259604","object_id":"column-259604","name":"iGroupType","name_without_path":"iGroupType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259605","object_id":"column-259605","name":"cUnitID","name_without_path":"cUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259606","object_id":"column-259606","name":"iChangRate","name_without_path":"iChangRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};