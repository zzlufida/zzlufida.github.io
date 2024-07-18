window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10609","name":"EQ_QPointDefRef","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View EQ_QPointDefRef AS \r\nselect EQ_PointDef.cposcode,\r\nEQ_PointDef.cposname,\r\ncase when EQ_PointDef.intobjtype =1 then dbo.UDF_GetResourceMessageByID('U8.CW.EQ.dxlx_P') else dbo.UDF_GetResourceMessageByID('U8.CW.EQ.dxlx_E') end as intobjtype, \r\nEQ_PointDef.cobj as cobjCode,\r\ncase when EQ_PointDef.intobjtype=1 then eq_position.cpname else eq_eqdata.ceqname end as cobj,\r\nEQ_PointDef.cJldw as cjldwCode,\r\nComputationUnit.cComunitName as cjldw,\r\nEQ_PointDef.dblUpper as dblUpper,\r\nEQ_PointDef.dblLower as dblLower,\r\nEQ_PointDef.dblValue as dblValue\r\nFrom EQ_PointDef left join eq_position on EQ_PointDef.cobj = eq_position.cPCode  \r\nleft join eq_eqdata on EQ_PointDef.cobj= eq_eqdata.ceqcode  \r\nleft Join ComputationUnit On EQ_PointDef.cJldw=ComputationUnit.cComunitCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EQ_QPointDefRef"},{"field":"Type","value":"View"}],"columns":[{"id":"column-197471","object_id":"column-197471","name":"cposcode","name_without_path":"cposcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197472","object_id":"column-197472","name":"cposname","name_without_path":"cposname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197473","object_id":"column-197473","name":"intobjtype","name_without_path":"intobjtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197474","object_id":"column-197474","name":"cobjCode","name_without_path":"cobjCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197475","object_id":"column-197475","name":"cobj","name_without_path":"cobj","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197476","object_id":"column-197476","name":"cjldwCode","name_without_path":"cjldwCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197477","object_id":"column-197477","name":"cjldw","name_without_path":"cjldw","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197478","object_id":"column-197478","name":"dblUpper","name_without_path":"dblUpper","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197479","object_id":"column-197479","name":"dblLower","name_without_path":"dblLower","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197480","object_id":"column-197480","name":"dblValue","name_without_path":"dblValue","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};