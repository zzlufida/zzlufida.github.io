window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10059","name":"Caq_Amoct_ThisLevel","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View Caq_Amoct_ThisLevel\r\nAs\r\n\tSelect isnull(A.cPPid,B.cPPid) cPPid,isnull(A.cBatch,B.cBatch) cBatch,\r\n\t\tisnull(A.cAmoID,B.cAmoID) cAmoID,isnull(A.cAmoType,B.cAmoType) cAmoType,\r\n\r\n\t\t(Case when A.cPPid is null then 0 else A.iQua*(1-A.fUseQuaRate) end) - (isnull(B.iQua,0)*isnull(B.OnpRation,0)*isnull(B.fUseQuaRate,0)) as iQua,\t\t--本阶耗量\r\n\t\t(Case when A.cPPid is null then 0 else A.iTotalAmo*(1-A.fUseAmoRate) end) - (isnull(B.iOnpTotalAmo,0)*isnull(B.fUseAmoRate,0)) as iTotalAmo,\t\t\t--本阶总成本\r\n\r\n\t\tcase\r\n\t\t\twhen A.OnpRation is null then Null\r\n\t\t\twhen A.OnpRation = 1.0 then\r\n\t\t\t\t(A.iTotalAmo*(1-A.fUseAmoRate)) - (isnull(B.iOnpTotalAmo,0)*isnull(B.fUseAmoRate,0))\r\n\t\t\telse\r\n\t\t\t\t(A.iOnpTotalAmo*(1-A.fUseAmoRate)) - (isnull(B.iOnpTotalAmo,0)*isnull(B.fUseAmoRate,0))*A.OnpRation\r\n\t\tEnd as iOnpTotalAmo,\t\t--本阶在产成本\r\n\r\n\t\tCase\r\n\t\t\twhen A.iFinQua is null then null\r\n\t\t\twhen A.iFinQua  = 0 then 0\r\n\t\t\telse ((A.iTotalAmo-A.iOnpTotalAmo)*(1-A.fUseAmoRate)-(isnull(B.iOnpTotalAmo,0)*isnull(B.fUseAmoRate,0))*(1-A.OnpRation))/A.iFinQua\r\n\t\tend As iFinPdtunitAmo,\t\t--本阶单位成本\r\n\r\n\t\tisnull(A.iPeriod,B.iPeriod + 1) iPeriod, isnull(A.iFinqua,C.iFinqua) iFinqua, isnull(A.iFinqua_Auxi,C.iFinqua_Auxi) iFinqua_Auxi,\r\n\t\tisnull(A.OnpRation,0) OnpRation,\r\n\r\n\t\tA.fUseQuaRate,A.fUseAmoRate,\t\t\t\t--本期耗用转移占用总成本比例\r\n\r\n\t\tisnull(B.iOnpTotalAmo,0)*isnull(B.fUseAmoRate,0) iBeginTotalAmo,\t\t\t\t\t\t--期初本阶成本\r\n\t\tisnull(B.iQua,0)*isnull(B.OnpRation,0)*isnull(B.fUseQuaRate,0) iBeginQua,\t\t\t\t--期初本阶耗量\r\n\r\n\t\tisnull(B.iQua,0)*isnull(B.OnpRation,0) iLastOnpQua,\t\t\t\t\t\t\t\t\t\t--上期在产耗量\r\n\t\tisnull(B.iOnpTotalAmo,0) iLastOnpTotalAmo,\t\t\t\t\t\t\t\t\t\t\t\t--上期在产金额\r\n\r\n\t\tB.fUseQuaRate fLastUseQuaRate ,B.fUseAmoRate fLastUseAmoRate,\t\t\t\t\t\t\t--上期期耗用转移占用总成本比例\r\n\r\n\t\tCase A.fUseAmoRate when 0 then 0 else 1 end bUsed,\t\t\t\t\t\t\t\t\t\t--存在本期产品或工序耗用\r\n\t\t0 bQC\r\n\r\n\tfrom Ca_Amoct A\r\n\tFull join ca_amoct B on A.cPPid = B.cPPid and A.cbatch = B.cBatch and A.cAmoType = B.cAmoType\r\n\t\tand A.cAmoID = B.cAmoID and A.iPeriod = B.iPeriod + 1\r\n\tinner join (Select iPeriod,cPPid,cBatch,Max(iFinQua) iFinqua,Max(iFinQua_Auxi) iFinqua_Auxi from ca_amoct group by iPeriod,cPPid,cbatch) C\r\n\t\ton A.iPeriod = C.iPeriod and A.cPPid = C.cPPid and A.cBatch = C.cBatch\r\n\twhere A.iPeriod > 0\r\n\t\t--设定一个阈值\r\n\t\tand Abs((Case when A.cPPid is null then 0 else A.iTotalAmo*(1-A.fUseAmoRate) end) - (isnull(B.iOnpTotalAmo,0)*isnull(B.fUseAmoRate,0))) > 0.0005  --金额大于0.0005\r\n\t\tand (\r\n\t\t\t\t(Case when A.cPPid is null then 0 else A.iQua*(1-A.fUseQuaRate) end) - (isnull(B.iQua,0)*isnull(B.OnpRation,0)*isnull(B.fUseQuaRate,0)) > 0.00001  --材料的耗量大于0.00001\r\n\t\t\t\tor isnull(A.cAmoType,B.cAmoType) <> '0'\r\n\t\t\t)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Caq_Amoct_ThisLevel"},{"field":"Type","value":"View"}],"columns":[{"id":"column-173394","object_id":"column-173394","name":"cPPid","name_without_path":"cPPid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173395","object_id":"column-173395","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173396","object_id":"column-173396","name":"cAmoID","name_without_path":"cAmoID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173397","object_id":"column-173397","name":"cAmoType","name_without_path":"cAmoType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173415","object_id":"column-173415","name":"iQua","name_without_path":"iQua","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173398","object_id":"column-173398","name":"iTotalAmo","name_without_path":"iTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173399","object_id":"column-173399","name":"iOnpTotalAmo","name_without_path":"iOnpTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173400","object_id":"column-173400","name":"iFinPdtunitAmo","name_without_path":"iFinPdtunitAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173401","object_id":"column-173401","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173402","object_id":"column-173402","name":"iFinqua","name_without_path":"iFinqua","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173403","object_id":"column-173403","name":"iFinqua_Auxi","name_without_path":"iFinqua_Auxi","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173404","object_id":"column-173404","name":"OnpRation","name_without_path":"OnpRation","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173405","object_id":"column-173405","name":"fUseQuaRate","name_without_path":"fUseQuaRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173406","object_id":"column-173406","name":"fUseAmoRate","name_without_path":"fUseAmoRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173407","object_id":"column-173407","name":"iBeginTotalAmo","name_without_path":"iBeginTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173408","object_id":"column-173408","name":"iBeginQua","name_without_path":"iBeginQua","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173409","object_id":"column-173409","name":"iLastOnpQua","name_without_path":"iLastOnpQua","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173410","object_id":"column-173410","name":"iLastOnpTotalAmo","name_without_path":"iLastOnpTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173411","object_id":"column-173411","name":"fLastUseQuaRate","name_without_path":"fLastUseQuaRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173412","object_id":"column-173412","name":"fLastUseAmoRate","name_without_path":"fLastUseAmoRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173413","object_id":"column-173413","name":"bUsed","name_without_path":"bUsed","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173414","object_id":"column-173414","name":"bQC","name_without_path":"bQC","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};