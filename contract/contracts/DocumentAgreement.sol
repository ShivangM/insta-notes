// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DocumentAgreement {
    address public owner;
    uint256 public documentPrice;

    struct Document {
        address owner;
        string documentHash;
        string terms;
    }

    mapping(uint256 => Document) public documents;
    mapping(address => uint256) public userPurchases;

    event DocumentPurchased(address buyer, uint256 documentId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier documentExists(uint256 documentId) {
        require(
            documents[documentId].owner != address(0),
            "Document does not exist"
        );
        _;
    }

    modifier notDocumentOwner(uint256 documentId) {
        require(
            documents[documentId].owner != msg.sender,
            "You cannot buy your own document"
        );
        _;
    }

    modifier hasNotPurchased() {
        require(
            userPurchases[msg.sender] == 0,
            "You have already purchased a document"
        );
        _;
    }

    constructor(uint256 _documentPrice) {
        owner = msg.sender;
        documentPrice = _documentPrice;
    }

    function uploadDocument(
        string memory documentHash,
        string memory terms
    ) external {
        uint256 documentId = uint256(
            keccak256(abi.encodePacked(msg.sender, documentHash))
        );
        documents[documentId] = Document({
            owner: msg.sender,
            documentHash: documentHash,
            terms: terms
        });
    }

    function purchaseDocument(
        uint256 documentId
    )
        external
        payable
        documentExists(documentId)
        notDocumentOwner(documentId)
        hasNotPurchased
    {
        require(msg.value == documentPrice, "Incorrect payment amount");

        userPurchases[msg.sender] = documentId;

        // You can implement additional logic here, such as transferring funds to the document owner.
        // For simplicity, this example does not include payment transfer logic.

        emit DocumentPurchased(msg.sender, documentId);
    }

    function getDocumentDetails(
        uint256 documentId
    ) external view documentExists(documentId) returns (Document memory) {
        return documents[documentId];
    }
}
