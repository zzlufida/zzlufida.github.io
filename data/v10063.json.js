window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10063","name":"Caq_Amoct_zhShow","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View Caq_Amoct_zhShow\r\nAs \r\n\tselect cPPid,cBatch,cAmoType,cAmoID,'' cUsebatch,iQua*(1-fUseQuaRate) iQua,iTotalAmo*(1-fUseAmoRate) iTotalAmo,iOnpTotalAmo*(1-fUseAmoRate) iOnpTotalAmo,\r\n\t\tCase iFinQua when 0 then 0 else (iTotalAmo-iOnpTotalAmo)*(1-fUseAmoRate)/iFinQua end ifinPdtUnitAmo,\r\n\t\tiPeriod,ifinQua,ifinQua_Auxi,OnpRation\r\n\tfrom ca_Amoct\r\n\r\n\tunion\r\n\r\n\tSelect A.cPPid,A.cBatch,5 as cAmoType,Cast(A.cUsePPid as nvarchar(20)) cAmoID,A.cUseBatch,B.iQua,Sum(iAmo) iTotalAmo,Sum(iAmo)*C.OnpRation iOnpTotalAmo,\r\n\t\tSum(iAmo)*(1-C.OnpRation) iFinPdtUnitAmo, A.iPeriod,C.iFinQua,C.ifinQua_Auxi,C.OnpRation\r\n\tfrom ca_amoct_usedetail A\r\n\tinner join Ca_Propu B on A.iPeriod = B.iPeriod and A.cPPid = B.cPPid and A.cbatch = B.cbatch\r\n\t\tand A.cUsePPid = B.cUsePPid and A.cUsebatch = B.cUseBatch\r\n\tinner join\r\n\t(\r\n\t\tselect iPeriod,cPPid,cBatch,Case Sum(iTotalAmo) when 0 then 0 else Sum(iOnpTotalAmo)/Sum(iTotalAmo) end OnpRation,Max(iFinQua) iFinQua,Max(ifinQua_Auxi) ifinQua_Auxi\r\n\t\tfrom ca_Amoct\r\n\t\tGroup by iPeriod,cPPid,cBatch\r\n\t) C on A.iPeriod = C.iPeriod and A.cPPid = C.cPPid and A.cbatch = C.cbatch\r\n\tGroup by A.iPeriod,A.cPPid,A.cBatch,A.cUsePPid,A.cUseBatch,B.iQua,C.OnpRation,C.iFinQua,C.iFinQua_Auxi","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Caq_Amoct_zhShow"},{"field":"Type","value":"View"}],"columns":[{"id":"column-173452","object_id":"column-173452","name":"cPPid","name_without_path":"cPPid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173453","object_id":"column-173453","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173454","object_id":"column-173454","name":"cAmoType","name_without_path":"cAmoType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173455","object_id":"column-173455","name":"cAmoID","name_without_path":"cAmoID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173456","object_id":"column-173456","name":"cUsebatch","name_without_path":"cUsebatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173457","object_id":"column-173457","name":"iQua","name_without_path":"iQua","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173458","object_id":"column-173458","name":"iTotalAmo","name_without_path":"iTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173459","object_id":"column-173459","name":"iOnpTotalAmo","name_without_path":"iOnpTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173460","object_id":"column-173460","name":"ifinPdtUnitAmo","name_without_path":"ifinPdtUnitAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173461","object_id":"column-173461","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173462","object_id":"column-173462","name":"ifinQua","name_without_path":"ifinQua","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173463","object_id":"column-173463","name":"ifinQua_Auxi","name_without_path":"ifinQua_Auxi","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173464","object_id":"column-173464","name":"OnpRation","name_without_path":"OnpRation","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};