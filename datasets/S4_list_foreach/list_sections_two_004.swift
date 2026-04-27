import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section("ls004-secA") {
                Text("ls004-A1"); Text("ls004-A2")
            }
            Section("ls004-secB") {
                Text("ls004-B1"); Text("ls004-B2")
            }
        }
    }
}
