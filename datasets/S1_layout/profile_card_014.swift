import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc014-name")
                    .font(.title2)
                    .bold()
                Text("pc014-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc014-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc014-posts"); Text("\(24)").bold() }
                VStack { Text("pc014-followers"); Text("\(114)").bold() }
                VStack { Text("pc014-likes"); Text("\(1014)").bold() }
            }
        }
        .padding()
    }
}
