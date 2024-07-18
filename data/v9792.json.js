window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9792","name":"a_cbfx_cpcbcy_jh1","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW [a_cbfx_cpcbcy_jh1]\r\nAS\r\n\r\nSELECT A.cPPID,A.cBatch, A.cAmotype, A.cAmoID,A.iperiod, MAX(A.iFinqua) AS iFinquaOfFirst, \r\n0 AS iPdtUnitAMo, Sum(A.iFinPdtUnitAmo) AS iFinPdtUnitAmoOfSum, 0 AS dblJHHL, \r\nSum((CASE WHEN (A.[iTotalAmo] IS Null  Or A.[iOnpTotalAmo] IS Null ) \r\nOr ([iTotalAmo]-[iOnpTotalAmo])=0 Or [iFinqua] =0 Or [iFinPdtUnitAmo] =0 THEN 0 \r\nELSE (A.[iQua]*(([iTotalAmo]-[iOnpTotalAmo])/[iTotalAmo]))/[iFinqua] END)) AS dblSjHl \r\nFrom CA_AmoCt A\r\nGROUP BY A.cPPID, A.cBatch, A.cAmotype, A.cAmoID,A.iperiod \r\n\r\nUnion ALL\r\n\r\nSELECT B.irealcoid,B.cBatch, D.cAmotype, D.cAmoID,A.iperiod, MAX(A.iFinqua) AS iFinquaOfFirst, \r\nMAX(D.iPdtUnitAMo) AS iPdtUnitAMoOfFirst, 0 AS iFinPdtUnitAmo, MAX(isnull(D.[iQua],0)) AS dblJHHL, 0 AS dblSjHl \r\nfrom caq_pland D \r\ninner join caq_coplan C on C.iplancoid = D.cPPID\r\ninner join ca_batchmap B on C.version=B.version and C.identcode=B.identcode and C.ipartid=B.ipartid and C.cdeptid=B.cdeptid\r\nleft join ca_amoct A on B.irealcoid=A.cppid and B.cbatch = A.cbatch and  A.cAmotype = D.cAmotype and A.cAmoID=D.cAmoID\r\n\r\nGROUP BY B.irealcoid,B.cBatch, D.cAmotype, D.cAmoID,A.iperiod","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"a_cbfx_cpcbcy_jh1"},{"field":"Type","value":"View"}],"columns":[{"id":"column-156324","object_id":"column-156324","name":"cPPID","name_without_path":"cPPID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156325","object_id":"column-156325","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156326","object_id":"column-156326","name":"cAmotype","name_without_path":"cAmotype","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156327","object_id":"column-156327","name":"cAmoID","name_without_path":"cAmoID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156328","object_id":"column-156328","name":"iperiod","name_without_path":"iperiod","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156329","object_id":"column-156329","name":"iFinquaOfFirst","name_without_path":"iFinquaOfFirst","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156330","object_id":"column-156330","name":"iPdtUnitAMo","name_without_path":"iPdtUnitAMo","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156331","object_id":"column-156331","name":"iFinPdtUnitAmoOfSum","name_without_path":"iFinPdtUnitAmoOfSum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156332","object_id":"column-156332","name":"dblJHHL","name_without_path":"dblJHHL","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156333","object_id":"column-156333","name":"dblSjHl","name_without_path":"dblSjHl","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};