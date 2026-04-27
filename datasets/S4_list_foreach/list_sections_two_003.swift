import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section("ls003-secA") {
                Text("ls003-A1"); Text("ls003-A2")
            }
            Section("ls003-secB") {
                Text("ls003-B1"); Text("ls003-B2")
            }
        }
    }
}
