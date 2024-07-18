window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12748","name":"v_CO_InvRoutingLaborCost1","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view v_CO_InvRoutingLaborCost1\r\nas\r\n--工艺路线人工费用\r\nselect D.PRoutingId,D.PRoutingDId,OperationresId=R.PRoutingResId,D.Wcid,O.OperationId,O.Description,D.OpSeq,\r\n       fLaborStdRate=isnull(L.fLaborStdRate,0),\r\n       fLaborStdWr=Round(Round(R.BaseQtyN,4)/Round(R.BaseQtyD,4),4),\r\n       fLaborStdCost=isnull(L.fLaborStdRate,0)*Round(Round(R.BaseQtyN,4)/Round(R.BaseQtyD,4),4),\r\n       D.EffBegDate,\r\n       D.EffEndDate\r\nfrom sfc_prouting M\r\n     inner join sfc_proutingDetail D on M.pRoutingId=D.pRoutingId\r\n     inner join sfc_operation O on O.OperationId=D.OperationId\r\n     left join sfc_proutingdres R on R.PRoutingDId=D.PRoutingDId\r\n     left  join pl_CO_WCLaborRate L on L.wcid=D.WcId","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_CO_InvRoutingLaborCost1"},{"field":"Type","value":"View"}],"columns":[{"id":"column-318478","object_id":"column-318478","name":"PRoutingId","name_without_path":"PRoutingId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318479","object_id":"column-318479","name":"PRoutingDId","name_without_path":"PRoutingDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318480","object_id":"column-318480","name":"OperationresId","name_without_path":"OperationresId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318481","object_id":"column-318481","name":"Wcid","name_without_path":"Wcid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318482","object_id":"column-318482","name":"OperationId","name_without_path":"OperationId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318483","object_id":"column-318483","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318484","object_id":"column-318484","name":"OpSeq","name_without_path":"OpSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318485","object_id":"column-318485","name":"fLaborStdRate","name_without_path":"fLaborStdRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318486","object_id":"column-318486","name":"fLaborStdWr","name_without_path":"fLaborStdWr","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318487","object_id":"column-318487","name":"fLaborStdCost","name_without_path":"fLaborStdCost","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318488","object_id":"column-318488","name":"EffBegDate","name_without_path":"EffBegDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318489","object_id":"column-318489","name":"EffEndDate","name_without_path":"EffEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};