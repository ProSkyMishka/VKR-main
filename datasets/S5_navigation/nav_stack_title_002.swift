import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst002-home")
                NavigationLink("nst002-go") { Text("nst002-next") }
            }
            .navigationTitle("nst002-stackTitle")
        }
    }
}
