window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10061","name":"Caq_Amoct_union","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View Caq_Amoct_union \r\nAs \r\n--联合体总成本\r\nSelect A.*,(B.iFinOutPut+B.iFinOutPut_LF) iFinQua from \r\n(\r\n\tSelect iPeriod,cPPid,cBatch,cAmoType,cAmoID,Sum(iQua) iQua ,Sum(iTotalAmo) iTotalAmo,Sum(iOnpTotalAmo) iOnpTotalAmo,Max(flag) IsUnion\r\n\tFrom\r\n\t(\r\n\t\t--主产品成本\r\n\t\tSelect isnull(B.iPeriod,A.iPeriod) iPeriod,isnull(B.uID,A.cPPid) cPPid,isnull(B.uBatch,A.cbatch) cBatch,A.cAmoType,A.cAmoID,A.iQua,A.iTotalAmo,A.iOnpTotalAmo,Case when B.oID is null then 0 else 1 end flag\r\n\t\tfrom Ca_amoct A \r\n\t\tleft join Ca_CoReal_zlfrel B on A.cPPid = B.oID and A.cbatch = B.oBatch and A.iPeriod = B.iPeriod\r\n\t\twhere B.ProductType = 0 or B.ProductType is null\r\n\t\t\r\n\t\tunion all \r\n\t\r\n\t\t--联产品成本\r\n\t\tSelect B.iPeriod,B.uID cPPid,B.uBatch cBatch,A.cAmoType,A.cAmoID,A.iQua,A.iTotalAmo,0 iOnpTotalAmo,1 flag\r\n\t\tfrom Ca_amoct_lfProduct A \r\n\t\tinner join Ca_CoReal_zlfrel B on A.cPPid = B.oID and A.cbatch = B.oBatch and A.iPeriod = B.iPeriod and B.ProductType = 2 and A.zID = B.uID and A.zbatch = B.uBatch\r\n\t\r\n\t\tunion all \r\n\t\r\n\t\t--副产品成本\r\n\t\tSelect B.iPeriod,B.uID cPPid,B.uBatch cbatch, -1 cAmoType,Cast(C.iPartID as nvarchar(20)) cAmoID,Max(A.iFinQua),Sum(A.iTotalAmo),0 iOnpTotalAmo,1 flag\r\n\t\tfrom Ca_amoct_lfProduct A \r\n\t\tinner join Ca_CoReal_zlfrel B on A.cPPid = B.oID and A.cbatch = B.oBatch and A.iPeriod = B.iPeriod and B.ProductType = 3 and A.zID = B.uID and A.zbatch = B.uBatch\r\n\t\tinner join Ca_batchmap C on B.oID = C.irealcoid and B.obatch = C.cbatch and B.ProductType = 3\r\n\t\tgroup by B.iPeriod,B.uID,B.uBatch,C.iPartID\r\n\t\t\r\n\t) T \r\n\tGroup by iPeriod,cPPid,cBatch,cAmoType,cAmoID\r\n) A inner join ca_rptoutput B on A.iPeriod = B.iPeriod and A.cPPid = B.cPPid and A.cbatch = B.cBatch","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Caq_Amoct_union"},{"field":"Type","value":"View"}],"columns":[{"id":"column-173426","object_id":"column-173426","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173427","object_id":"column-173427","name":"cPPid","name_without_path":"cPPid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173428","object_id":"column-173428","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173429","object_id":"column-173429","name":"cAmoType","name_without_path":"cAmoType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173430","object_id":"column-173430","name":"cAmoID","name_without_path":"cAmoID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173431","object_id":"column-173431","name":"iQua","name_without_path":"iQua","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173432","object_id":"column-173432","name":"iTotalAmo","name_without_path":"iTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173433","object_id":"column-173433","name":"iOnpTotalAmo","name_without_path":"iOnpTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173434","object_id":"column-173434","name":"IsUnion","name_without_path":"IsUnion","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173435","object_id":"column-173435","name":"iFinQua","name_without_path":"iFinQua","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};