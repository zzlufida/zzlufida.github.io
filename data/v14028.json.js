window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14028","name":"v_ST_WaitOutForkcview","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view [dbo].[v_ST_WaitOutForkcview]  \r\nas  \r\nselect sotype,sodid,ccode,max(ddate) as ddate,cInvCode,cWhCode,cfactorycode,cBatch,cFree1,cFree2,cFree3,cFree4,cFree5,cFree6,cFree7,cFree8,cFree9,cFree10  ,cvmivencode,  \r\nsum(fOutQuantity) as fOutQuantity,sum(fOutnum) as fOutnum ,max(dvdate) as dvdate, max(dprodate) as dprodate,  \r\nmax(iexpiratdatecalcu) as iexpiratdatecalcu,max(cexpirationdate) as cexpirationdate,max(dexpirationdate) as dexpirationdate  \r\n from (  \r\nselect ex_consignment.ccode,ex_consignmentdetail.idemandtype as sotype ,ex_consignmentdetail.cdemandid as sodid,  \r\n       max(ex_consignment.ddate) as ddate,ex_consignmentdetail.cInvCode,coutwhcode as cWhCode,cfactorycode,cBatch,cFree1,cFree2,cFree3,cFree4,cFree5,cFree6,cFree7,cFree8,cFree9,cFree10,cvmivencode,   \r\nsum(  \r\n         (case when isnull(ex_consignmentdetail.fquantity ,0) -  isnull(ex_consignmentdetail.foutqty,0)<0  \r\n                   then 0  \r\n                   else isnull(ex_consignmentdetail.fquantity ,0) -  isnull(ex_consignmentdetail.foutqty,0)  \r\n         end)   \r\n) as fOutQuantity,  \r\nsum(  \r\n         (case when isnull(ex_consignmentdetail.fnum ,0) -  isnull(ex_consignmentdetail.foutnum,0)<0   \r\n                   then 0  \r\n                   else isnull(ex_consignmentdetail.fnum ,0) -  isnull(ex_consignmentdetail.foutnum,0)  \r\n         end)  \r\n) as fOutnum ,  \r\nmax(ex_consignmentdetail.dvdate) as dvdate, max(ex_consignmentdetail.dprodate) as dprodate,  \r\nmax(ex_consignmentdetail.iexpiratdatecalcu) as iexpiratdatecalcu, max(ex_consignmentdetail.cexpirationdate) as cexpirationdate,  \r\nmax(ex_consignmentdetail.dexpirationdate) as dexpirationdate  \r\nfrom ex_consignment    \r\ninner join ex_consignmentdetail on ex_consignmentdetail.id = ex_consignment.id   \r\ninner join inventory on inventory.cinvcode = ex_consignmentdetail.cinvcode   \r\nwhere isnull(ex_consignment.bdraft,0)=0 and ex_consignment.cvouchtype = N'EX24'   \r\nand isnull(ex_consignmentdetail.clinecloser,'')='' -- and ((isnull(binvbatch,0) = 1 and isnull(cBatch , N'')<>N'' ) or isnull(binvbatch,0) = 0)  \r\nand isnull(ex_consignmentdetail.iststatus,1) = 1  --未备货完成  \r\n--and isnull(ex_consignmentdetail.coutwhcode,'') <> ''  --必须有仓库   \r\nand dbo.inventory.bexpsale = 1 and isnull(dbo.inventory.bservice,0) = 0 and isnull(dbo.inventory.binvtype,0) = 0   and ex_consignment.ibustypeid <> 5    --去除直运业务  \r\ngroup by ex_consignment.ccode,ex_consignmentdetail.idemandtype,cdemandid,ex_consignmentdetail.cInvCode,coutwhcode,cBatch,ex_consignmentdetail.cFree1,ex_consignmentdetail.cFree2,ex_consignmentdetail.cFree3,\r\nex_consignmentdetail.cFree4,ex_consignmentdetail.cFree5,ex_consignmentdetail.cFree6,ex_consignmentdetail.cFree7,ex_consignmentdetail.cFree8,ex_consignmentdetail.cFree9,ex_consignmentdetail.cFree10,ex_consignmentdetail.cvmivencode ,ex_consignmentdetail.cfactorycode \r\n  \r\nunion   \r\n  \r\nselect ex_consignment.ccode,ex_consignmentdetail.idemandtype as sotype ,ex_consignmentdetail.cdemandid as sodid,max(ex_consignment.ddate) as ddate,ex_stockupdetail.cInvCode,ex_stockupdetail.coutwhcode as cWhCode,ex_consignmentdetail.cfactorycode,ex_stockupdetail.cBatch,\r\nex_stockupdetail.cFree1,ex_stockupdetail.cFree2,ex_stockupdetail.cFree3,ex_stockupdetail.cFree4,ex_stockupdetail.cFree5,ex_stockupdetail.cFree6,ex_stockupdetail.cFree7,ex_stockupdetail.cFree8,ex_stockupdetail.cFree9,ex_stockupdetail.cFree10, ex_stockupdetail.cvmivencode,  \r\nsum(  \r\n         (case when isnull(ex_stockupdetail.fstquantity ,0) -  isnull(ex_stockupdetail.foutqty,0)<0  \r\n                   then 0  \r\n                   else isnull(ex_stockupdetail.fstquantity ,0) -  isnull(ex_stockupdetail.foutqty,0)  \r\n         end)   \r\n) as fOutQuantity,  \r\nsum(  \r\n         (case when isnull(ex_stockupdetail.fstnum ,0) -  isnull(ex_stockupdetail.foutnum,0)<0   \r\n                   then 0  \r\n                   else isnull(ex_stockupdetail.fstnum ,0) -  isnull(ex_stockupdetail.foutnum,0)  \r\n         end)  \r\n) as fOutnum ,  \r\nmax(ex_consignmentdetail.dvdate) as dvdate, max(ex_consignmentdetail.dprodate) as dprodate,  \r\nmax(ex_consignmentdetail.iexpiratdatecalcu) as iexpiratdatecalcu, max(ex_consignmentdetail.cexpirationdate) as cexpirationdate,  \r\nmax(ex_consignmentdetail.dexpirationdate) as dexpirationdate  \r\nfrom ex_consignment      \r\ninner join ex_consignmentdetail on ex_consignmentdetail.id = ex_consignment.id     \r\ninner join ex_stockupdetail on ex_stockupdetail.guid_source = ex_consignmentdetail.guids     \r\ninner join inventory on inventory.cinvcode = ex_stockupdetail.cinvcode     \r\nwhere isnull(ex_consignment.bdraft,0)=0 and ex_consignment.cvouchtype = N'EX24'     \r\nand isnull(ex_consignmentdetail.clinecloser,'')=''     \r\nand isnull(ex_consignmentdetail.iststatus,1) = 0     \r\nand dbo.inventory.bexpsale = 1 and isnull(dbo.inventory.bservice,0) = 0 and isnull(dbo.inventory.binvtype,0) = 0   and ex_consignment.ibustypeid <> 5  --去除直运业务  \r\ngroup by ex_consignment.ccode,ex_consignmentdetail.idemandtype,ex_consignmentdetail.cdemandid,ex_stockupdetail.cInvCode,ex_stockupdetail.coutwhcode,ex_stockupdetail.cBatch,ex_stockupdetail.cFree1,ex_stockupdetail.cFree2,ex_stockupdetail.cFree3,\r\nex_stockupdetail.cFree4,ex_stockupdetail.cFree5,ex_stockupdetail.cFree6,ex_stockupdetail.cFree7,ex_stockupdetail.cFree8,ex_stockupdetail.cFree9,ex_stockupdetail.cFree10,ex_stockupdetail.cvmivencode,ex_consignmentdetail.cfactorycode  \r\n) as t     \r\ngroup by ccode,sotype,sodid,cInvCode,cwhcode,cBatch,cFree1,cFree2,cFree3,cFree4,cFree5,cFree6,cFree7,cFree8,cFree9,cFree10 ,cvmivencode ,cfactorycode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ST_WaitOutForkcview"},{"field":"Type","value":"View"}],"columns":[{"id":"column-412388","object_id":"column-412388","name":"sotype","name_without_path":"sotype","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412389","object_id":"column-412389","name":"sodid","name_without_path":"sodid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412390","object_id":"column-412390","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"excode: nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412391","object_id":"column-412391","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412392","object_id":"column-412392","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412393","object_id":"column-412393","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412394","object_id":"column-412394","name":"cfactorycode","name_without_path":"cfactorycode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412395","object_id":"column-412395","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412396","object_id":"column-412396","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412397","object_id":"column-412397","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412398","object_id":"column-412398","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412399","object_id":"column-412399","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412400","object_id":"column-412400","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412401","object_id":"column-412401","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412402","object_id":"column-412402","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412403","object_id":"column-412403","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412404","object_id":"column-412404","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412405","object_id":"column-412405","name":"cFree10","name_without_path":"cFree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412406","object_id":"column-412406","name":"cvmivencode","name_without_path":"cvmivencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412407","object_id":"column-412407","name":"fOutQuantity","name_without_path":"fOutQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412408","object_id":"column-412408","name":"fOutnum","name_without_path":"fOutnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412409","object_id":"column-412409","name":"dvdate","name_without_path":"dvdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412410","object_id":"column-412410","name":"dprodate","name_without_path":"dprodate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412411","object_id":"column-412411","name":"iexpiratdatecalcu","name_without_path":"iexpiratdatecalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412412","object_id":"column-412412","name":"cexpirationdate","name_without_path":"cexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-412413","object_id":"column-412413","name":"dexpirationdate","name_without_path":"dexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};