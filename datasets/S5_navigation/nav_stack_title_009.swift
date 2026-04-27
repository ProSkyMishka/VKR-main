import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst009-home")
                NavigationLink("nst009-go") { Text("nst009-next") }
            }
            .navigationTitle("nst009-stackTitle")
        }
    }
}
