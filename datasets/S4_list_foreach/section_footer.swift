import SwiftUI
struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("Header"), footer: Text("Footer")) {
                Text("Row 1")
                Text("Row 2")
            }
        }
    }
}
