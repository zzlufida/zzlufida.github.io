window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13162","name":"v_EX_WaitIn","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view v_EX_WaitIn    \r\nas      \r\nselect max(ex_consignment.ddate) as ddate, ex_consignmentdetail.cInvCode,coutwhcode as cWhCode,cBatch,ex_consignmentdetail.cFree1,ex_consignmentdetail.cFree2,ex_consignmentdetail.cFree3,\r\nex_consignmentdetail.cFree4,ex_consignmentdetail.cFree5,ex_consignmentdetail.cFree6,ex_consignmentdetail.cFree7,ex_consignmentdetail.cFree8,ex_consignmentdetail.cFree9,ex_consignmentdetail.cFree10,     \r\n\r\nsum(isnull(ex_consignmentdetail.fquantity ,0) -  isnull(ex_consignmentdetail.funoutqty,0)) as fInQuantity,    \r\nsum(isnull(ex_consignmentdetail.fnum ,0) -  isnull(ex_consignmentdetail.funoutnum,0)) as fInNum ,    \r\n\r\nmax(ex_consignmentdetail.dvdate) as dvdate, max(ex_consignmentdetail.dprodate) as dprodate   \r\n,isnull(ex_consignmentdetail.idemandtype,0) as sotype \r\n,ex_consignmentdetail.cdemandid as sodid\r\n,\r\n---- ex_consignmentdetail.cdemandcode as SoCode\r\ncase when isnull(ex_consignmentdetail.cdemandcode,'')='' then NULL else ex_consignmentdetail.cdemandcode end as SoCode\r\n,ex_consignmentdetail.idemandseq as SoSeq\r\n,case isnull(ex_consignmentdetail.idemandtype,0) when 4 then ex_consignmentdetail.cdemandcode else null end as DemandCode,ex_consignmentdetail.cfactorycode\r\nfrom ex_consignment      \r\nleft join ex_consignmentdetail on ex_consignmentdetail.id = ex_consignment.id     \r\n--left join ex_free on ex_consignmentdetail.guids = ex_free.guid and ex_consignmentdetail.iversion = ex_free.iversion    \r\n--left join ex_innergather on ex_innergather.guid = convert(nvarchar(50),ex_consignmentdetail.guids)    \r\nleft join inventory on inventory.cinvcode = ex_consignmentdetail.cinvcode     \r\nleft join ex_order on ex_consignmentdetail.cordercode = ex_order.ccode     \r\nleft join ex_orderdetail on ex_order.id = ex_orderdetail.id  and ex_orderdetail.irowno = ex_consignmentdetail.irowno     \r\nwhere isnull(ex_consignment.bdraft,0)=0 and ex_consignment.cvouchtype = N'EX25' and   \r\n--((isnull(binvbatch,0) = 1 and isnull(cBatch , N'')=N''   ) or  isnull(coutwhcode ,'')='')  \r\nisnull(coutwhcode ,'')=''\r\ngroup by ex_consignmentdetail.cInvCode,coutwhcode,cBatch,ex_consignmentdetail.cFree1,ex_consignmentdetail.cFree2,ex_consignmentdetail.cFree3,ex_consignmentdetail.cFree4,ex_consignmentdetail.cFree5,ex_consignmentdetail.cFree6,ex_consignmentdetail.cFree7,ex_consignmentdetail.cFree8,ex_consignmentdetail.cFree9,ex_consignmentdetail.cFree10    \r\n, ex_consignmentdetail.cdemandcode,ex_consignmentdetail.idemandseq,isnull(ex_consignmentdetail.idemandtype,0),ex_consignmentdetail.cdemandid\r\n,ex_consignmentdetail.cfactorycode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_EX_WaitIn"},{"field":"Type","value":"View"}],"columns":[{"id":"column-354483","object_id":"column-354483","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354484","object_id":"column-354484","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354485","object_id":"column-354485","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354486","object_id":"column-354486","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354487","object_id":"column-354487","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354488","object_id":"column-354488","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354489","object_id":"column-354489","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354490","object_id":"column-354490","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354491","object_id":"column-354491","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354492","object_id":"column-354492","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354493","object_id":"column-354493","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354494","object_id":"column-354494","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354495","object_id":"column-354495","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354496","object_id":"column-354496","name":"cFree10","name_without_path":"cFree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354497","object_id":"column-354497","name":"fInQuantity","name_without_path":"fInQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354498","object_id":"column-354498","name":"fInNum","name_without_path":"fInNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354499","object_id":"column-354499","name":"dvdate","name_without_path":"dvdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354500","object_id":"column-354500","name":"dprodate","name_without_path":"dprodate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354501","object_id":"column-354501","name":"sotype","name_without_path":"sotype","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354502","object_id":"column-354502","name":"sodid","name_without_path":"sodid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354503","object_id":"column-354503","name":"SoCode","name_without_path":"SoCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354504","object_id":"column-354504","name":"SoSeq","name_without_path":"SoSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354505","object_id":"column-354505","name":"DemandCode","name_without_path":"DemandCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-354506","object_id":"column-354506","name":"cfactorycode","name_without_path":"cfactorycode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};