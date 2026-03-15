import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.blue.ignoresSafeArea()
            Text("Overlay")
                .foregroundColor(.white)
                .font(.title)
        }
    }
}
