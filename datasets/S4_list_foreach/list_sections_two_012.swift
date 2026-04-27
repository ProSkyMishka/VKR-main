import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section("ls012-secA") {
                Text("ls012-A1"); Text("ls012-A2")
            }
            Section("ls012-secB") {
                Text("ls012-B1"); Text("ls012-B2")
            }
        }
    }
}
