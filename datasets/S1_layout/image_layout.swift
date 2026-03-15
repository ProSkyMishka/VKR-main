import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image("logo")
                .resizable()
                .scaledToFit()
                .frame(width: 120, height: 120)
            Text("Caption")
                .font(.caption)
        }
        .padding(16)
    }
}
