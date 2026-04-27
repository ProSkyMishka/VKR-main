import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section("ls009-secA") {
                Text("ls009-A1"); Text("ls009-A2")
            }
            Section("ls009-secB") {
                Text("ls009-B1"); Text("ls009-B2")
            }
        }
    }
}
