import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section("ls011-secA") {
                Text("ls011-A1"); Text("ls011-A2")
            }
            Section("ls011-secB") {
                Text("ls011-B1"); Text("ls011-B2")
            }
        }
    }
}
