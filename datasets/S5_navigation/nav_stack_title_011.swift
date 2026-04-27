import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst011-home")
                NavigationLink("nst011-go") { Text("nst011-next") }
            }
            .navigationTitle("nst011-stackTitle")
        }
    }
}
